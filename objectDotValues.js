let myObj = {
    name: "Abdul haseeb",
    school: "CAGS",
    age: 17,
    score:{
        pass: {
            easily: 4,
            hardly: 2
        },
        fail: 0
    }
}
let keys = Object.keys(myObj)
console.log(keys);

let values = Object.values(myObj)
console.log(values);