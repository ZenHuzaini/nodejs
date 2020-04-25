const axios = require('request')

const url = 'https://www.google.com/recaptcha/api.js?render=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

axios({
    method: 'GET',
    url,
    proxy: 'http://10.144.1.10:8080', //env
    timeout: 120000,
    json: true
}, (err, res) => {
    if (err) {
        console.log('the response is here ', err)
        return err
    }
    console.log('this is the response', res.body)
    //get the data 
})
