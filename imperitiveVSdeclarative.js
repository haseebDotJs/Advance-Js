//imperative vs declarative code
//manual (imperative)
//auto (declarative)
//-----------------------------------------------------------------//
//In imperative code we do spoon feeding and define each and every step to javascript to peform a logic
//For example:

let friends = ['ali','aman','subhan','ubaid','hasan','moiz','subhan'];
let respectGiving = []
for(let i = 0; i< friends.length; i++){
  respectGiving[i] = `Mr ${friends[i]}`
}
console.log(respectGiving);

//Where as in declarative code we do not do spoon feeding instead javascript do most of the work by itself 
// and we donot have to define the code step by step

let respected = friends.map(name => `Mr ${name}`)
console.log(respected);
// the result is same but as you can see that most of the work is done automatically by js

// another example:

// imperative
let only3 = []
for(let i = 0; i< friends.length; i++){
    if(friends[i].length <= 4){
        only3.push(friends[i])
    }
}
console.log(only3);

// declarative

let onlyThree = friends.filter(name => name.length <= 4)
console.log(onlyThree);

// again same result but the differnce can be seen by itself