// import * as firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyCTfJjzZyHj3J0k5d8s7VW-AoaTLO-FVeE",
//   authDomain: "expensify-7c149.firebaseapp.com",
//   databaseURL: "https://expensify-7c149.firebaseio.com",
//   projectId: "expensify-7c149",
//   storageBucket: "expensify-7c149.appspot.com",
//   messagingSenderId: "366810245393"
// };

// firebase.initializeApp(config);

// const database = firebase.database();

// =========== Working with LISTS

// Write
// database.ref('expenses').push({
//   description: 'Rent',
//   notes: '',
//   amount: 109500,
//   createdAt: 955562665132165
// });

// database.ref('expenses').push({
//   description: 'Phone Bill',
//   notes: '',
//   amount: 5900,
//   createdAt: 955562665132165
// });

// database.ref('expenses').push({
//   description: 'Food',
//   notes: '',
//   amount: 1200,
//   createdAt: 955562665132165
// });

// Read as array, once
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     // make an array ob weird object created in database by the code above
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });



  // Read as array, subscription
//  database.ref('expenses')
//   .on('value',(snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });
  
// Further subscribe methods

// child_removed
// get removed item
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
// check further in ref -> on() docs 
 


// ================ Create  =================================
// database.ref().set({
//   name: 'Ahmad Ali',
//   age: 21,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Mansehra',
//     country: 'Pakistan',
//     tehsil: 'Baffa'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e)
// });


// ================ Update  =================================
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });



// ================ Read =================================
// ===== Reads once =====
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error Fetching Data', e);
//   });

// ===== Reads Online, Updates on the spot, it subscribes to the database =====
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error While Fetching Data', e);
// });

// setTimeout(() => {
//   database.ref('age').set(24);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(3);
// }, 10500);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });


// ================ Delete =================================
// database.ref('isSingle').
//   remove()
//   .then(() => {
//     console.log('Data Removed');
//   })
//   .catch((e) => {
//     console.log("Did not remove data", e);
//   });
