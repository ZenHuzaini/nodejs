const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/sendEmail"

module.exports = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        return console.log('cannot connect to database', err)
    }
    console.log('connected to database')
})