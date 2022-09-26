import { Flight } from "../models/flight.js"

function newFlight (req, res){
  const newFlight = new Flight()
  const dt = newFlight.departs
  const departsDate = dt.toISOString().slice(0,16)
  console.log(newFlight)
  res.render('flights/new', {
  title: 'New Flight',
  departsDate : departsDate

  })
  console.log(departsDate)
}


function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    console.log(flight)
    res.redirect(`/flights/new`)
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
  .then(flight => {
    res.render('flights/show', {
      title: 'Flight Details',
      flight,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
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


export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update
}