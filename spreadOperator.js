let obj = {
    name: "haseeb",
    qualification: "matric",
    age: 17,
    score: {
        physics: {
            practical: 55,
            theory: 15
        },
        maths: 88,
        urdu: 56,
        chemistry: {
            theory: 60,
            practical: {
                uthaigiri: 5,
                actualPractical: 10
            }
        }
    }
}
let myObj2 = {
    ...obj,
    qualification: "Intermediate"
}
let myObj3 = {...obj, ...myObj2, qualification: "Matric"};
myObj2.name = "Abdul Haseeb"
console.log(obj);
console.log(myObj2);
console.log(myObj3);
let oldObj = {
    age: 15,
    class: "9th"
}
let newObj = {
   ...oldObj,
   age: 17
}
let arr = [1,2,3,4]
let [...arr2] = 
console.log(arr2);
console.log(newObj);