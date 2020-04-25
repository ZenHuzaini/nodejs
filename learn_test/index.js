const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb', extended: true }));

const userCOntroller = require('./controller/userController')

app.get('/alluser', userCOntroller.prototype.seeAllUser)
app.get('/getoneuser', userCOntroller.prototype.getusers)
app.post('/user', userCOntroller.prototype.addUser)

app.get('/', (req, res) => {
    res.send('hello jest')
})


module.exports = app