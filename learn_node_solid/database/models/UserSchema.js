const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'Zen'
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User