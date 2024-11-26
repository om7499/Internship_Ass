
/* Q1:Declare a variable using var at the top of your code and redeclare it using let with the
same name. Note any errors or messages in the console. */
//  var a
//  let a

 // Ans : Identifier 'a' has already been declared 


 /* Q2:Write code that uses a const variable in a function and then try to reassign it inside and
outside the function. Explain the results. */

function check(){
    const b = 10
    b = 20
 }
 //b = 30


 /* Ans : Assignment to constant variable at check
         becuse we can't change the value of const variable */
    


 /* Q3:Explain, with examples, how JavaScript handles hoisting for function declarations, var,
let, and const */
   function demo(){
    debugger
    var x = 10
    let y = 20
    const z = 30
   }
   demo()
   
/* let and const can aloso hosting but they unavailable until previous value is run
   var is show undefine until its run properly */

