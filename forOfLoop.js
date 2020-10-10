let name = ["Aman","Moiz","Haseeb","Subhan","Ubaid","Muneeb"]
for(let value of name){
    console.log(value);
}

let nums = [10,20,30]
let total = 0
for(let sum of nums){
    total -= sum
    console.log(total);
}

let check = "haseeb"
for (let each of check){
    console.log(each);
}
let myObj = {
    fName: "Abdul",
    lName: "Haseeb"
}
for (let eachObj in myObj){
    console.log(myObj[eachObj]);
}