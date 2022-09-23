import { Flight } from "../models/flight.js"

function newFlight (req, res){
  console.log('new flight')
  res.render("flights/new", {
  title: "Add Flight",
  })
}



export {
  newFlight as new
}