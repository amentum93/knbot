const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CinemaSchema = new Schema({
  uuid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
    address: {
        type: String,
        required: true
    },
  price: {
      type: String,
      required: true
  },
    tel: {
        type: String,
        required: true
    },
    tickets: {
        type: String,
        required: true
    },
  url: {
    type: String,
    required: true
  },
  location: {
    type: Schema.Types.Mixed
  },
  nights: {
    type: [String],
    default: []
  }
})

mongoose.model('cinemas', CinemaSchema)