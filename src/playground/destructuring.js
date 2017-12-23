
/////////////////////////// OBJECT SESTRUCTURING ///////////////////////////////


const person = {
  name: 'Ahmad',
  age: 21,
  location: {
    city: 'Mansehara',
    temp: 92
  }
};

// destrucred object (name has a default value)
const {name = "Anonymous" , age} = person;
console.log(`${name} is ${age}`);

// destrucred object (temp variable is renamed to temperature, also given a default value)
const {city, temp: temperature = 33} = person.location;
if(city && temperature){
  console.log(`It is ${temperature} in ${city}`);
}



const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = "Self-Published"} = book.publisher;
console.log(publisherName);


/////////////////////////// ARRAY SESTRUCTURING ///////////////////////////////
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
const [, villiage = 'Kulhaary Sharqi', state] = address;
console.log(`You are in ${villiage} ${state}`);