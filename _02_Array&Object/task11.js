
// Write a function printAddress that accepts an object parameter user with a nested object property address containing city and country properties. Use destructuring to extract and print the city and country.

user = {address:{city:"Amravati",country : "india"}}
function printAddress(user){
     const{address:{city,country}} = user
     return city +" "+ country
}
console.log(printAddress(user));
