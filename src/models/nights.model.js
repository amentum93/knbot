const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nightsSchema = new Schema({
    uuid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    ticketsmsk: {
        type: String,
        required: true
    },
    ticketsspb: {
        type: String,
        required: true
    },
    picture: {
    type: String
},
    films: {
        type: [String],
        default: []
    },
    cinemas: {
        type: [String],
        default: []
    }
})

mongoose.model('nights', nightsSchema)