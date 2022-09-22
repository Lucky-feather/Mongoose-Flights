import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => { 
    res.render('skills/index', {
      skills: skills
    })
  })

  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')

  })
}

// function index(req, res) {
//   res.render('skills/index', {
//     skills: Skill,

export {
  index
}