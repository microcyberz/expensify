import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCTfJjzZyHj3J0k5d8s7VW-AoaTLO-FVeE",
  authDomain: "expensify-7c149.firebaseapp.com",
  databaseURL: "https://expensify-7c149.firebaseio.com",
  projectId: "expensify-7c149",
  storageBucket: "expensify-7c149.appspot.com",
  messagingSenderId: "366810245393"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default };