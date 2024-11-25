/* Q1:Create a variable name inside a function and try to access it outside the function. Explain
why you get an error.  */

function demo(){
    let name = "om"
}

console.log(name);

// Ans : we can not access this be becouse it is functional scope functional scope is not working outside block


/* Q2:Declare a variable using var at the bottom of your code. Try to access it at the top of your
code and observe the result. Do the same with a let variable. */

console.log(a)
var a = 10
// Ans: it gives value is undifine 

//console.log(b);
let b = 20;
/* Ans : Uncaught ReferenceError: Cannot access 'b' before initialization
        because let variable cant't access befoure initialisation

 
/* Q3:Write code that creates a variable using var within a function. Then, call the function and try
accessing the variable outside the function.*/

function data(){
    var x = 29
}
console.log(x);

/* Ans : Uncaught ReferenceError: x is not defined at
        becoase we can't use function dlock variable outside the block  */  
