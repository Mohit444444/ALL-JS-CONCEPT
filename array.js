// array in javascript

//example-1
arr1 = new Array("purple","green","yellow");// here we have to use square brackets!
arr2 = ["black", "orange", "pink"];
arr3 = new Array(10);
arr4 = [10];
 console.log([arr1], [arr2], [arr3], [arr4]);
 console.log(arr2);
 console.log(arr3);
 console.log(arr4);

 // example-2
let arr1 = ["hi there", 5, true];
console.log(typeof arr1[0]);
console.log(typeof arr1[1]);
console.log(typeof arr1[2]);

//indexing of array
let arr = ["toyota", "tata", "scarpio"];
console.log(arr[1]);

// built- in length property
let colors = ["pink", "yellow", "black"];
let booleans = ["true", "false", "false", "true"];
let emptyArray =[];

console.log("length of colors", colors.length);
console.log("length of boolean", booleans.length);
console.log("length of empty Array", emptyArray.length);



// Q1- Create an array to use as your shopping list with 
// 3 items: "Milk," "Bread," and "Apples"
let items = ["milk", "Bread", "Apples"];
items.push("tomato"); // adding a new item in the list
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);


// Q2- check your list length in the console 
let arry = ["milk", "bread", "Apples"];
console.log("length of arr", arry.length);

//Q3- update bread to banana
let arry1 = ["milk", "bread", "Apples"];
arry1[1] = "Banana"
console.log(arr1[1]);