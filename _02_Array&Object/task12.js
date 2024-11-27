
// Write a function printEmployee that accepts an object parameter employee with properties name, position, and salary. Use destructuring with default values to ensure that these properties have default values if not provided, and use the rest pattern to collect any additional properties into a variable extraInfo, and then print all the information
const employee1 = { 
    // name: 'John',
    // position: 'Manager',
    salary: '$70,000', 
    department: 'Sales' 
};

const{name="om",position ="devloper",salary,department} = employee1

console.log(name)
console.log(position)
console.log(salary)
console.log(department)