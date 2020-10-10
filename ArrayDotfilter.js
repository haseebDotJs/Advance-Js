

// let plans = [{name: "basic", price: 3.99,},{name: "premium", price: 5.99},{name: "ultimate", price: 9.99}]
// let filtering = plans.filter((item,index) => {
//   return item.price < 6
// })
// console.log(filtering);
// let nums = [1,2,3,4,5,6,7,8,9]

// let even = nums.filter((item,index) => {
//   // console.log(`item ` + item);
//   // console.log(`index ` +index);
//   return (item % 2 === 0)
// })
// let odd = nums.filter((item,index) => {
//   return (item % 2 === 1)
// })
// console.log((new Date() - new Date()) / 1000);
// console.log();
// // console.log(odd);

//array dot filter also works like array dot map , it also goes through all the elements of index but it doesn't return all instead it return
//an element in an array only if the condition is true other wise it will not return the element

//here are some basic hosting plans but we want only those plans which are less than 6 dollars
let plans = [{name: "basic", price: 3.99,},{name: "premium", price: 5.99},{name: "ultimate", price: 9.99}]
let filtering = plans.filter((item,index) => {
  return item.price < 6
})
console.log(filtering);

//here are names of some of my friends

let myFrnds = ["aman","moiz","ubaid","hasan","ali","subhan","saim","muneeb"]

//now i only want to return those frnds name whose name is less tha or equal to 5 letter
//same like this we can put any condition according to our needs
let equalToFive = myFrnds.filter((item,index) => {
  return (item[0] === "a");
})
console.log(equalToFive);

//returning even numbers
let nums = [1,2,3,4,5,6,7,8,9]

let even = nums.filter(item => {
   return (item % 2 === 0)
})
console.log(even);

//returning odd numbers

let odd = nums.filter(item => {
  return (item % 2 === 1)
})
console.log(odd);
