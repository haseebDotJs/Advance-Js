let a;
let b = null;
let c = undefined;
let d = 4;
let e = "hello"

let myVal = a || b || c || d || e
console.log(myVal);

let gender = 'female'

let myRes1 = (gender === "male") && "&& yes gender is male" ;
console.log(myRes1);
let myRes2 = (gender === "female") && "|| gender is not male"
console.log(myRes2);
console.log(gender && 'yes gender is not empty');
console.log((gender === undefined) || 'Gender is empty');