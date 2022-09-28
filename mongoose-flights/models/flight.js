import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: { type: String, },
  price: { type: Number, }
})

const flightSchema = new Schema({
  airline : String,
  airport : {
    type: String,
    default: 'DEN'
  },
  flightNo : Number,
  departs : {
    type: Date,
    default: oneYearFromNow()
  },
  tickets : [ticketSchema],
  menu : [{type: Schema.Types.ObjectId, ref: 'Meal' }]
})

function oneYearFromNow() {
  const today = new Date()
  //console.log('today', today.getFullYear()+1)
  today.setFullYear(today.getFullYear()+1)
  console.log ('today', today)
  return today
}



const Flight = mongoose.model('Flight', flightSchema)

const Ticket = mongoose.model('Ticket', ticketSchema)

export {
  Flight,
  Ticket
}

