
// Destructure the following nested object to extract the properties name, age, and city.
 const user = {
    details : {
        name : "Alice",
        age : 25,
        address : {
            city : "New York",
            country : "USA"
        }
    }
 };

 const{details:{name,age,address:{city,country}}} = user
 console.log("Name : "+name);
 console.log("age : "+age);
 console.log("City : "+city)
 
 
 
 