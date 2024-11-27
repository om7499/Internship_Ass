function Example(a,b,r){
    console.log(a,b,r)
    return r
}
let ref= Example(1,3,function(){ console.log("hello",a); return "hello"});