import firebase from 'firebase';
import moment from 'moment';

// Init firebase connection
export const fire = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
});

export const db = fire.database();

export const ref = db.ref('donations');

export const addDonation = () => {
  return ref
    .push({
      name: 'jamie',
      amount: 200,
      date: moment().format(),
    })
    .then(onfulfilled => {
      console.log(onfulfilled);
      return onfulfilled;
    })
    .catch(onrejected => {
      return onrejected;
    });
};
