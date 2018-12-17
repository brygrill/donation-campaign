const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment');

admin.initializeApp();

const db = admin.database();

const ref = db.ref('donations');

exports.addDonation = functions.https.onCall((data, context) => {
  console.log(data);
  console.log(context);
  return ref
    .push({
      name: 'jamie',
      amount: 200,
      date: moment().format(),
    })
    .then(data => {
      console.log(data);
      return { success: true };
    })
    .catch(err => {
      console.error(err);
      throw new functions.https.HttpsError('error processing request');
    });
});
