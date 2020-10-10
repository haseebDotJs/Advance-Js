let obj = {
    name: "haseeb",
    qualification: "matric",
    age: 17,
    score: {
        physics: {
            practical: 15,
            theory: 55
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
let {...restVal} = obj
console.log(restVal);
obj.score = "pass"
console.log(restVal);
let {score, ...rest} = obj
console.log(score);
console.log(rest);
const aboutMy = (name,age,...otherInfo) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Other Information: ${otherInfo}`);
}
aboutMy("Abdul Haseeb", 17, "Matric pass", "Gamer", "Developer");

// console.log(obj);
// console.log(myObj2);

const numbers = (num1,num2,...allNums) => {
    let sums = num1 + num2;
    console.log(sums);
    for (i = 0; i < allNums.length; i++){
        sums += allNums[i]
    }                                                                         
     console.log(sums);
     console.log(allNums);
}
numbers(88,23,123,12)