const app = require("./index")
require('./database/db')

app.listen(1996, () => {
    console.log('connected')
})