//array dot reduce works a bit differently 
// The reduce() method reduces the array to a single value.

// The reduce() method executes a provided function for each value of the array (from left-to-right).

// The return value of the function is stored in an accumulator (result/total).

// We have to set the value of accumulator for the first iteration and onwards the returns value becomes the value of accumulator
// if we don't define any value of the accumulator for the first iteration then it's default value is setted to 1
// if we don't return any value then the value of accumulator for onwards iteration is ssetted to undefined

// Note: reduce() does not execute the function for array elements without values.

//returning the sum of all item in one value
let nums = [1,2,3,4,5,6,7,8,9]
let all = nums.reduce((acc , item) => {
   return acc + item
},0)
console.log(all); //this is the value of accumulator for the first iteration

//returning the multiplication of all item in one value
let all2 = nums.reduce((acc , item) => {
  return acc * item
},1)
console.log(all2);


// let result = nums.reduce((acc,item) => {
//   console.log(acc);
//   return acc + item;
// })
// console.log(result);

// let names = ["haseeb","subhan","aman","ubaid"]

// let check = names.reduce((acc,item) => {
//   console.log(acc);
//   return acc + " " + item
// }, "muneeb")
// console.log(check);