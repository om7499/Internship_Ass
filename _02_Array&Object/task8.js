
// Destructure the following object to extract the properties name and age, where prop is a variable containing the property name.
const prop = 'user';
const data = { user: { name: 'Alice', age: 25 } };
const{name,age} = data[prop]
console.log(name);
console.log(age);
   
