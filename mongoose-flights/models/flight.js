import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline : String,
  airport : String,
  flightNo : Number,
  departs : {
    type: Date,
    default: oneYearFromNow()
  }
})

function oneYearFromNow() {
  const today = new Date()
  console.log("today", today.getFullYear()+1)
  today.setFullYear(today.getFullYear()+1)
  return today
}


const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}

