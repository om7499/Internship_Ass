
// Destructure the following object to extract the properties name and age, and collect the rest of the properties into a variable details.
const person = { 
      name: 'John',
      age: 30, 
      city: 'New York',
      country: 'USA' 
    };

const{name:n,age:a,city:c,country:C} = person
let details = [n,a];
console.log(details) 