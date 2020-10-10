//array dot find works exactly like array dot filter but it only returns the first true condition value it finds
// whereas filter goes through all the index's element and return all of elements on true condition

// let plans = [{name: "basic", price: 3.99,},{name: "premium", price: 5.99},{name: "ultimate", price: 9.99}]
// let find = plans.find((item,index) => {
//   return item.price > 4
// })
// console.log(find);
// let nums = [1,2,3,4,5,6,7,8,9]

// let even = nums.find((item,index) => {
//   return (item % 2 === 0)
// })
// let odd = nums.find((item,index) => {
//   return (item % 2 === 1)
// })
// console.log(even);
// console.log(odd);

//here it will only returns me the first element it find whose price is greater than 4 dollars
let plans = [{name: "basic", price: 3.99,},{name: "premium", price: 5.99},{name: "ultimate", price: 9.99}]
let find = plans.find((item,index) => {
  return item.price > 4
})

console.log(find);