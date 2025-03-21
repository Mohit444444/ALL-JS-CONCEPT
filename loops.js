// for-off loops in javascript
let str = "mohityadav"

let size = 0;
for(let val of str) {
    console.log("val = ", val);
    size++;
}

console.log("the size of str =:", size);


// for-in loops in javascript

let student = {
    name: "mohit",
    sem: "6th",
    branche: 'cse(data science)',
    cgpa: 8.5, 
};

console.log(student);
for(let i in student) {
    console.log(i);
}

// practice question in loops in javascript
// print all even number fron 0 to 100 or odd too

for(let i=0; i<=100; i++) {
    if(i%2 !==0) {
        console.log("i=:", i);
    }
}

