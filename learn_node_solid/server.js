const app = require('./index')
const port = 4000


app.listen(port, () => {
    console.log('Server listens to ' + port)
    require('./database/database')
}).on('error', (message) => {
    console.log('cannot connect, due to Error ', message)
})