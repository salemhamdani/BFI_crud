const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema(
    {
        fName: String,
        lName: String,
        email: String,
        post: String,
    }
)

module.exports = mongoose.model('Person', personSchema)