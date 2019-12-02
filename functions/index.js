const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require("firebase-admin");
admin.initializeApp();


exports.sendMessage = functions.firestore
    .document('products/{productId}')
    .onCreate(event => {

    const docId = event.params.productId;

    const name = event.after.data().name;

    const productRef = admin.firestore().collection('products').doc(docId)

    return productRef.update({ message: `Nice ${name}! - Love Cloud Functions`})

});