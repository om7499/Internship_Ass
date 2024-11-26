 // destructure the raju from this arry
let arr = [1,2,4,"rr","raju"] 
const[,,,,a] = arr
console.log(a);


// pass these arry to function and destructure all the values
let arr1 = [1,2,4,"rr","ram"]

function demo(){
    const[k,b,c,d,e] = arr1
    console.log(k);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);    
}

demo();


// access the first two value and also create the default value next 2 value
let arr3 = [1,3] 
const[x,y,z=4,w=5]= arr3


// printing the arry in descending order and accss the first value
let arr4 = [1,3,5,6,7,20]  // sort((a,b=>(b-a)))
console.log(arr4.reverse())
// const[p]=arr4
console.log(arr4[0])

//print the arry in reverse in raversorder and capitalise the first value
let arr5 = ["raju","ram","rani"]




