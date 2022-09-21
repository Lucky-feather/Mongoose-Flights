import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/skills')
})

export { 
  router
}

//res.render('index', { title: 'Express' })