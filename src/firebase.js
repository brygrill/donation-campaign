import firebase from 'firebase/app';
import 'firebase/database';
import _ from 'lodash';
import moment from 'moment';

const dbRef = process.env.NODE_ENV === 'production' ? '2018' : 'testing';

// Init firebase connection
export const fire = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
});

export const db = fire.database();

export const ref = db.ref(dbRef);

export const addDonation = (name, amount) => {
  return ref
    .push({
      name,
      amount: _.toNumber(amount),
      date: moment().format(),
    })
    .then(onfulfilled => {
      return onfulfilled;
    })
    .catch(onrejected => {
      return onrejected;
    });
};
