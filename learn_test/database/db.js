const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/example'

mongoose.connect(url, () => {
    console.log('Database connected ..')
})