import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  console.log('new meal', req.body),
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals,
    })
  })
}

function createMeal(req, res) {
  Meal.create(req.body)
  .then(meal => {
    res.redirect('meals/new')
  })
}

export {
  newMeal as new,
  createMeal as create
}