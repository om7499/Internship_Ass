
// Write a function printUserDetails that accepts an object parameter userInfo with properties firstName and lastName. Use destructuring with aliases to assign these properties to variables first and last, and then print them.
const userInfo = { firstName: 'John', lastName: 'Doe' };
testcase1:
const userInfo2 = { firstName: 'Bob', lastName: 'Smith', age: 30 };

 // Should print: First Name: Bob, Last Name: Smith
printUserDetails(userInfo2); 
// testcase2:
// const { firstName, lastName } = { firstName: 'Jane', lastName: 'Doe' };
// printUserDetails({ firstName, lastName }); // Should print: First Name: Jane, Last Name: Doe
// testcase3:
// const user = { info: { firstName: 'Ella', lastName: 'Smith' } };
// const { info: { firstName, lastName } } = user;
// printUserDetails({ firstName, lastName }); // Should print: First Name: Ella, Last Name: Smith
