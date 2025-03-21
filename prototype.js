// prototype in javascript

let a = {
    name: "papa",
    language: "javascript"
}

console.log(a);

let p = {
    run: () => {
        alert("run ho gaya hu bahisab!");
    } 
}
a.__proto__= p // this method is called prototype
a.run()