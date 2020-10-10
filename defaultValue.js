// let myObj = {
//   name: "haseeb",
//   age: 17,
//   qualification: "matric"
// }
// let {name} = 
// console.log(name);

// default value in objects
// let iceCream = ({scoops = 1,flavour = ['strawberry'],toppings=['peanuts']}) => {
//   const iceCreamOrder = `I want ${scoops} ${scoops === 1 ? 'scoop' : "scoops"} of ${flavour.join(' and ')} ice cream with ${toppings.join(' and ')} topping`;
//   console.log(iceCreamOrder);   
// }
// iceCream({scoops: 2,flavour: ["chocolate","vanilla"],toppings: ["sprinkes","peanut butter"]})
// iceCream({})
// iceCream({toppings: ["dry fruits","sprinkles"],scoops: 12})
// iceCream({})

let burgerOrder = ({howMuch = "1",burger = "double stack krisper",additional = ['mayo fries']} = {}) => {
  const finalBurgerOrder = `I want ${howMuch} ${burger} ${additional[0] !== undefined ? 'with ' + additional.join(' and ') : ''}`
  console.log(finalBurgerOrder);
}

burgerOrder() //as now i've also setted the default value of destructuring object as  empty object 
// so now even if i call the function without any argument, then it'll also run


// burgerOrder({})//deafult values will run, but atleast we have to pass an empty object
burgerOrder({howMuch: 2, burger: "double stack krisper",additional: ["cheese","mayo french fries","coke"]}) //given values will run
burgerOrder({howMuch: 1, burger: "beef encounter",additional: ["cheese slice", "mushrooms","carimalized onion"]})//given values will run
burgerOrder({howMuch: 1, burger: "grilled chicken burger"});//given values will run and default value of additional will run
burgerOrder({howMuch: 3,additional: ['double cheese ']}); //given values will run and default value of burger will run
//when passing object as an argument and destructuring properties of object in parameter we donot have to pass the properties of obj
//sequence wise, like we pass values in variables

