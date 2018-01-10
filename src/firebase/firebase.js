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

database.ref().set({
  name: 'Ahmad Ali',
  age: 21,
  isSingle: false,
  location: {
    city: 'Mansehra',
    country: 'Pakistan',
    tehsil: 'Baffa'
  }
});

// database.ref().set('This is s string');

database.ref('age').set(21);
database.ref('location/city').set('Islamabad');

database.ref('attributes').set({
  height: '72',
  weight: '150'
});