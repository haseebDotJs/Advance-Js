// let name = "my name is haseeb"
// let replace1 = name.replace(/m/g,"M")
// name[5] = "M"
// console.log(name);
// console.log(replace1);

//primitve data types are immutable/non-changable
//while non-primitve are mutable/changable
// const a =10;
// a = 20
//primitive data types are can't update there value when using const
// const b =10
// console.log(a === b);
//it becomes true bcz it's value is saved in js memory which is 10 and
//then both values get comapared that's why they are called  primitive data type bcz they are passed by value

// const obj1 = {
//     name: "haseeb"
// }
// const obj2 = {
//     name: "haseeb"
// }
// obj1.name = "abdul haseeb"
//while non-primitive data types can be changed even if they are using const 
// console.log(obj1 === obj2);
//it gets false bcz there address is saved in js memory not their values
//that's why they are called non-primitve datat types and when there addresses get compared they get false answer

const myObj = {
    name: "haseeb",
    age: 16
}// passed address/referrence 
const b = myObj
console.log(b);
myObj.name = "Abdul Haseeb"
myObj.age = 17

console.log(myObj);

const name = "haseeb" //passed value "haseeb"
// name = "abdul haseeb"
// console.log(name);

const myArr1 = [1,2,3,4]
const myArr2 = [1,2,3,4]
console.log(typeof myArr1);
console.log(myArr1 === myArr2);//return false bcz address is saved in js memory not their values
// myArr[2] = 24
// console.log(myArr1);

// non-primitve data types: objects and arrays (changable/mutable)
// primitve data types: other than objects and array all are primitve (inchangable/immutable)
