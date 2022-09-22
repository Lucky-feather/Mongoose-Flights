import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'


const router = Router()

router.get('/', skillsCtrl.index)

router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

export { 
  router
}
