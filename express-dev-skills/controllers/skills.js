import { skills } from '../models.skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => { // skills represents the result of the query, in this case ALL skills
    res.render('skills/index', {
      skills:skills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')

function index(req, res) {
  res.render('skills/index', {
    skills:skills
  })
}

export {
  index
}