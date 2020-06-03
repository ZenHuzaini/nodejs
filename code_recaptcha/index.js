const express = require('express')
const axios = require('axios')
const hbs = require('hbs')
const path = require('path')
const request = require('request-promise')
const requestpromise = require('request-promise')

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.static('public'))

const setViewPath = path.join(__dirname, './public')
app.set('view engine', 'hbs')
app.set('views', setViewPath)



app.get('/', (req, res) => {
    res.render('index')
})

let Sitekey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
let Secretkey = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'

app.post('/send2', async (req, res) => {
    console.log('this is executed')
    const secret_key = '6Ldt8ekUAAAAAGAAR62UN07H5bDo_AxUGpl-2DqW';
    const token = req.body['g-recaptcha-response'];
    console.log('what is token ', req.body)

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    var options = {
        method: 'POST',
        uri: url,
        proxy: 'http://10.144.1.10:8080',
        json: true
    };

    // const isValidCaptcha = new Promise((resolve, reject) => {
    //     request.post(options, (err, res) => {
    //         if (err) {
    //             console.log('rejected ', err)
    //             reject(err)
    //         }
    //         console.log('resolved ', res.body)
    //         const { body, statusCode } = res
    //         resolve({ body, statusCode })
    //     })
    // })

    const getIt = await rp(options)

    // console.log('this is the ', isValidCaptcha)
    // console.log('thi is the ', await isValidCaptcha)

    // const result = await isValidCaptcha
    res.send(getIt)


    // isValidCaptcha.then((result) => {
    //     console.log('it is executed ')
    //     res.send(result)
    // }).catch((err) => {
    //     console.log('err is not executed ')
    //     res.send(err)
    // });

    // rp(options)
    //     .then((result) => {
    //         // POST succeeded...
    //         console.log('then is executed ', result)
    //         res.json(result)
    //     })
    //     .catch(function (err) {
    //         console.log('catch is executed ', err)
    //         res.json(err)
    //         // POST failed...
    //     });
})

app.post('/captcha', function (req, res) {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({ "responseError": "something is wrong" });
    }

    const secretKey = "6Ldt8ekUAAAAAGAAR62UN07H5bDo_AxUGpl-2DqW";

    const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&amp;response=" + req.body['g-recaptcha-response'] + "&amp;remoteip=" + req.connection.remoteAddress;

    request(verificationURL, function (error, response, body) {
        body = JSON.parse(body);

        if (body.success !== undefined && !body.success) {
            return res.json({ "responseError": "Failed captcha verification" });
        }
        res.json({ "responseSuccess": "Sucess" });
    });
})


app.post('/send', async (req, res) => {
    console.log('this is executed')
    const secret_key = '6Le35pAUAAAAAHMdMq-Y67jF4mLkDllNuio7Qj9l';
    const token = req.body.token;
    console.log(req.body)
    console.log('what is token ', token)
    console.log('waaw ', req.body['g-recaptcha-response']);

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    var options = {
        method: 'POST',
        uri: url,
        proxy: 'http://10.144.1.10:8080',
        json: true // Automatically stringifies the body to JSON
    };

    requestpromise(options)
        .then((result) => {
            // POST succeeded...
            console.log('then is executed ', result)
            res.json(result)
        })
        .catch(function (err) {
            console.log('catch is executed ', err)
            res.json(err)
            // POST failed...
        });
});

app.listen(1996, () => {
    console.log('listen to 1996')
})