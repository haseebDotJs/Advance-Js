// watch this for more understanding https://www.youtube.com/watch?v=JmGJUzNsGFs
let myObj = {
    name: "Abdul haseeb",
}
let myObj2 = {
    qualification: "Matric",
}
myObj2.qualification = "inter"
let myObj3 = Object.assign(myObj, myObj2, { name: "Haseeb" })
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

const a = [0, 1, 2, 3, 4, 5, 6, 7];
const b = Object.assign([], a, { 4: "four" });
console.log(b);

const course = {
    name: 'cloud native',
    score: 18
}
const score = {
    score: 68
}

const finalResult = Object.assign([], course, score, { score: 98 })
console.log(finalResult);


function myFunc(options) {
    let defaultValues = {
       fName: 'John',
       lName: 'doe'
    }
    options = Object.assign(defaultValues,options)
    console.log(options);
    console.log(`${options.fName} ${options.lName}`);
}

myFunc({
    // fName: 'Abdul',
    lName: 'Haseeb'
})

let hell = [1,2,3,4,5]

let newhell = Object.assign(hell,{3:'four'})
console.log(newhell);
let newhell2 = Object.assign([],undefined)
console.log(newhell2);
