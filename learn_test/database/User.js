const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'zen',
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User