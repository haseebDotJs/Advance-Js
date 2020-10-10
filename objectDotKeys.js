let myObj = {
    name: "Abdul haseeb",
    school: "CAGS",
    age: 17,
    score:{
        pass: 1,
        fail: 0
    }
}
let keys = Object.keys(myObj)
console.log(keys);
for (let i = 0;i < Object.keys(myObj).length; i++){
    console.log(myObj[keys[i]]);
}
