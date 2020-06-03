const express = require('express')
const app = express()
var admin = require("firebase-admin");

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '10mb', extended: true }));


var serviceAccount = require("./key/keyzen.json");

let firebaseToken //it will be the token of user android / client

const payload_message = (title, body) => {
    return {
        notification: {
            title,
            body
        }
    }
}

const options = {
    // priority: 'high',
    // timeToLive: 60 * 60 * 24,
    "android": {
        "priority": "normal"
    },
    "apns": {
        "headers": {
            "apns-priority": "5"
        }
    },
    "webpush": {
        "headers": {
            "Urgency": "high"
        }
    }
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://bismillah-bisa-sekarang.firebaseio.com"
});

app.get('/firebase/notification/', async (req, res) => {
    const { token, body, title } = req.query;

    console.log(req.query)
    console.log('here is executed')

    admin.messaging().sendToDevice(token, payload_message(title, body), options)
        .then(function (response) {
            console.log('here is executed3')
            console.log(JSON.stringify(response))
            res.status(200).json("Notification sent successfully " + JSON.stringify(response))
        })
        .catch(function (error) {
            console.log('here is executed4')
            console.log("Error sending message:", error);
        });
})

app.listen(3000, () => {
    console.log("listening to port" + 3000)
})

//prepare for demo,
//review the MR about FC 
//prepare to start to implement FCM
