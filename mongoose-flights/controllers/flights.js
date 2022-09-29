import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function newFlight (req, res){
  const newFlight = new Flight()
  res.render('flights/new', {
  title: 'New Flight',
  })
}

function create(req, res) {
  if(req.body.departs === '') {
    delete req.body.departs
    console.log('req.body after',req.body)
  }
  Flight.create(req.body)
  .then(flight => {
    console.log('this flight', flight)
    res.redirect(`/flights`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function show(req, res){
  Flight.findById(req.params.id)
  .populate('menu')
  .then(flight => {
    Meal.find({_id: {$nin: flight.menu}})
    .then(meals => {
      res.render('flights/show', {
        title: 'Flight Details',
        flight,
        meals,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight=> {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/edit',{
      flight,
      title: 'Edit Flight'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(flight=> {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createTicket(req, res) {
  console.log(req.body)
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/flights/${flight._id}`)
  })
}

function addToMenu(req, res) {
  console.log(req.body)
  Flight.findById(req.params.id)
  .then(flight => {
    flight.menu.push(req.body.mealId)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/flights/${flight._id}`)
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  addToMenu,
}