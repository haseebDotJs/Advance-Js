//ternaryoperators came in replace of if else
//condition ? true : false
// let a = 12;
// let b = 24
// a > b ? console.log("true") : console.log("false");

//nested conditions 
//condition? nested condition? true of nested conditon
//: false of nested condition(this whole true false is true of if condition)
//: false of first condition

let a = "haseeb"
let b = "haseeb"
a === b
? a[0] === "h"?
   a[5] === "b"?
     console.log("last is b") :
     console.log("last is not b") :
 console.log("first is not h") :
console.log("first condition running");
//it is same as
if (a === b) {
  if(a[0] === "h"){
    if(a[5] === "b"){
      console.log("last is b");
    }
    else{
      console.log("last is not b");
    }
  }
  else{
    console.log("first is not h");
  }
}
else{
  console.log("first condition running");
}