// function in javascript
function myFunc() {
    console.log("this is my practice code");
    console.log("again this is my practice code");
}
myFunc();


// parameter as a input
function myFunction(msg) {
    console.log(msg);
}

myFunction("i want to master in javascript"); // argument


// function sum of two numbers 
function sum(a, b) {
    s = a + b;
    console.log("before return");
    return s;
}
let val = sum(5, 6)
console.log(val);

// arrofunction in javascript
let arrowSum = (a, b) => {
    console.log(a+b);
}