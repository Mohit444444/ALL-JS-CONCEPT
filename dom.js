// document object model in javascript

// get element by Id
let heading = document.getElementById("heading")
console.dir(heading);


// get Element by Class Name
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);


// get Element by querySelector+ querySelectorAll
let div = document.querySelector("div");
console.dir(div);

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = "hello javascript! from apna college student";

let divs = document.querySelectorAll(".box1");
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";