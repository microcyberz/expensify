import { setTimeout } from "timers";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Ahmad",
    //   age: 21
    // });
    reject('Something went wrong');
  }, 3000);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('ERROR:', error);
});

console.log('after');
