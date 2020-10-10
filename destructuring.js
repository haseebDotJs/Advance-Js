let myObj = {
    name: "haseeb",
    age: 17,
    matric: {
        maths: 84,
        physics: {
            practical: 15,
            theory: 70
        },
        english: 60,
        urdu: 61,
        islamiat: 67
    }     
}
let myArr = ["haseeeb", "matric", 17]
let [,,age] = myArr//skipping 1st and 2nd value in array and accesssing thirs value
console.log(age);
const {matric:{physics: phy}} = myObj//renaming nested objects physics to phy
console.log(phy);
console.log(myObj);
// const {matric:{physics:{practical,theory}}} = myObj
// console.log(practical);
// console.log(theory);

// let myArr = ["haseeb", "matric pass", "developer"]
// const [firstIndex, secondIndex, thirdIndex] = myArr
// console.log(firstIndex);
// console.log();