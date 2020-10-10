let name = ["Aman","Moiz","Haseeb","Subhan","Ubaid","Muneeb"]
for (let ind in name){
    console.log(ind);
    console.log(name[ind]);
}

let nums = [10,20,30]
let total = 0
for(let a in nums){
  console.log(total+=nums[a]);
}

let check = "haseeb"
for(let c in check){
    console.log(check[c]);
};

let myObj = {
    fName: "Abdul",
    lName: "Haseeb",
    score: [80,70,75,88,56],
    matric: {
        pass: 1,
        fail: 0
    }
}
for(let objects in myObj){
    console.log(objects);
    console.log(myObj[objects]);
}
console.log(myObj.length);