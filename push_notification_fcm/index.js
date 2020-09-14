var admin = require("firebase-admin");

var serviceAccount = require("./key/keyzen.json");
const firebaseToken = 'fGNoQlHYR4eb3Jospq70Bv:APA91bFGAIDs9ax1w6JTjZv2PoMe7LMhrv3Z9zfzaNqUe9yZhZ14s0wFdJWyRwh5N5BtjF43plyuRUipwGQvN7Bsyh1PYMMZYomJGQy-vGpe-yTFd1kOvt1ZbSHbpozD9wvYf8bho4zW'; //it will be the token of android

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://node-fcm-zen.firebaseio.com"
});

const payload = {
    notification: {
        title: 'bayar woy! Bismillah dapet uang beasiswa',
        body: 'Cepetan bayar asrama elah!'
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