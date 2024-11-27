
// Destructure the following nested object to extract the properties name, age, and city, 
//  and use aliases firstName and location for name and address.city respectively
 user = {
   name : "om",
   age : 21,
   address : {
    city : "Amravti",
    country : "indea"
   }
}
const { name: firstName, age, address: { city: location } } = user;

console.log(firstName);
console.log(age);
console.log(location);
