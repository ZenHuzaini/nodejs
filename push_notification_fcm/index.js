var admin = require("firebase-admin");

var serviceAccount = require("./key/keyzen.json");
const firebaseToken = 'abcdeabcdeabcde'; //it will be the token of android

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://node-fcm-zen.firebaseio.com"
});

const payload = {
    notification: {
        title: 'Notification Title',
        body: 'This is the example of this application'
    },
    data: {
        accoutnt: '100',
        balance: '10'
    }
}

const options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24
}

admin.messaging().sendToDevice(firebaseToken, payload, options)
    .then(function (response) {
        console.log("Successfully sent message:", response);
    })
    .catch(function (error) {
        console.log("Error sending message:", error);
    });