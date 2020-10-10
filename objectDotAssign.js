let myObj = {
    name: "Abdul haseeb",
}
let myObj2 = {
    qualification: "Matric",
}
myObj2.qualification = "inter"
let myObj3 = Object.assign(myObj,myObj2, {name: "Haseeb"})
// console.log(myObj3);
// console.log(myObj);

// let me = {
//   cast: "Mughal",
//   height: 5.7
// }
// Object.assign(me,myObj,myObj2)
// console.log(me);
// console.log(myObj);
// me = Object.assign(me,myObj)
// console.log(me);

let firstName = "Abdul"
let lastName = "Haseeb"
let mySelf = {
    firstName: firstName,
    lastName: lastName  
}
let mySelf2 = {
   firstName,
   lastName
}
console.log(mySelf);
console.log(mySelf2);