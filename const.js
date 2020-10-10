//by declaring a variable using const, we cannot over ride it's value until it's an non-primitive data type
const name = "haseeb"
console.log(name);

// name = "subhan"
// console.log(name);
const score = [85, 75, 60, 84, 62]
console.log(score);
score[0] = 89
console.log(score);


const newObj = {
    name: "haseeb",
    age: 17,
    qualification: "matric"
}
console.log(newObj);
newObj.qualification = "inter"
console.log(newObj);

let number = 18
const number2 = "20"
console.log(number2);
let plus = number + number2
console.log(plus);
