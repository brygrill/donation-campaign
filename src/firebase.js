import firebase from 'firebase';

// Init firebase connection
export const fire = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
});

export const db = fire.database();

export const ref = db.ref('donations');
