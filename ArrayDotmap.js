// let plans = [{name: "basic", price: 3.99,},{name: "premium", price: 5.99},{name: "ultimate", price: 9.99}]
// // for (let i in plans){
// //     console.log(i);
// //     console.log(plans[i].name);
// //     console.log(plans[i].price);
// // }
// let mapping = plans.map((element,index) => {
//   return{name: element.name,price: element.price,index: index}
// })


// console.log(mapping);


// let myArr = [1,2,3,4,5]
// let double = myArr.map((elem,index) => {
//   console.log(`the item multiplied by 2 at index ${index} is: ${elem*2}`) 
//   return (elem * 2)-
// })
// console.log(myArr);
// console.log(double)

//we have to define a function in an rouded brackets of array.map and this function will run according to length of array elements

//array dot map goes through all the index of the array, we can acces those elements and can make changes in it 
//also we have to turn the statement so that a new array should be made ,

//array dot map returns an elem and those elemnts again make an array, so we can make any changes according to our need 
//in an array and then form it again into an array

//if we do not return an element so the all the indexes of array will be undefined, also array dot map will run (number of elements in araay) times

//we can acces element and the index and element

//here i am multiplying each element of array with 3 and again returning it in an separate variable along with it's index to understand better

let myArr = [10,20,30,40,50];
let map = myArr.map(function(item,index){
   return `${item * 3} at index ${index}` 
})
console.log(map);

//this is an array of objects
let pilot = [{name: "haseeb", experience: 5, age: 35},{name: "subhan", experience: 20, age: 48},{name: "muneeb", experience: 30, age: 65}]

//now i want to return all the info of each index's pilot in an string ,
//i can also do it with for in loop but that's a long method and array.map is more sufficient than it
let pilotInfo = pilot.map((pilot,index) => {
  console.log(`Pilot's Name: ${pilot.name}, Pilot's Experience: ${pilot.experience} years and Pilot's Age: ${pilot.age}`);
  return `Pilot's Name: ${pilot.name}, Pilot's Experience: ${pilot.experience} years and Pilot's Age: ${pilot.age}`
})

console.log(pilotInfo);