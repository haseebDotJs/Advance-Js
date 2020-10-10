// let myObj = {
//     fName: "Abdul",
//     lName: "Haseeb",
//     age: 17,
//     myFunc: function () {
//         console.log(this.fName + " " + this.lName);
//     }
// }
// myObj.myFunc()
// // let newFunc = function(){
// //     console.log(this);
// // }
// // newFunc()
// 'use strict'
let x = "hello"
console.log(x);

let haseeb ={
  myobj: {
    newFun: function(){
      console.log("es5 func in Obj",this);
    },
    newFunBro: "hello world"
  }
} 

haseeb.myobj.newFun()
let has = {
  myobj: () => {
    setTimeout(() => {
    console.log("es6 func in Obj", this.x);
    },100)
  }

} 
has.myobj()

// var person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id     : 5566,
//     myFunction : function() {
//       return this;
//     }
//   };
//  console.log(person.myFunction());
// // function check(){
// //     console.log(this.style.display = "none");
// // }
// var person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
// let person2 = {
//     firstName: "john",
//     lastName: "doe"
// }
// console.log(person1.fullName.call({firstName: "john", lastName: "doe"}))