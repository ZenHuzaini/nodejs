const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '10mb', extended: true }));

const UserController = require('./controllers/UserController')

function myfunction(req, res, next) {
    console.log('it is now executed ')
    next()
}

app.get('users', myfunction, UserController.prototype.userList)
app.get('user/me', UserController.prototype.myData)
app.post('user/create', UserController.prototype.createUser)

app.get('/', myfunction, (req, res) => {
    res.send('from home')
})

module.exports = app