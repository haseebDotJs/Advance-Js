//ES5 functions
// function myfunc(){
//   console.log("this is my funciton");
// }
// myfunc()


//ES6 functions

const func = () => {
  console.log("ES6 function running");
}
func()

const myName = (firstName, lastName) => {
  return (`My name is ${firstName} ${lastName}`);
}
// myName("Haseeb", "Khalid")
console.log(myName("haseeb", "khalid"));

const sums = (firstValue, lastValue) => {
  console.log(firstValue * lastValue);
}
sums(6, 5)
let name = prompt("What is your name?")
const newFun = firstName => {
  if(firstName !== ""){
    console.log(`Hello Mr. ${firstName}`);
  }
  else{
    console.log(`The field can not be empty`);
  }
}
newFun(name)

let myObj = {
  name: "haseeb",
  myfunc: () => {
    console.log(this.name)
  },
  myfunc2: function(){
     console.log(this.name);
  } 
}
setInterval(() => console.log("Annonymous arrow func"), 100)
myObj.myfunc()
myObj.myfunc2()