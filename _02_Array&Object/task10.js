
// Consider the following object:Write code to destructure the user object and extract the city property from the nested address object.
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const{address : {city}} = user
console.log(city);