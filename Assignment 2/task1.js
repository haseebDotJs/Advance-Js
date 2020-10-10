let myObj = {
  name: "haseeb",
  age: 17,
  qualification: "matric"
}

localStorage.setItem("myInfo", JSON.stringify(myObj))//we cannot store an object directly in localstorage and for that we have to convert it in string and the command to convert it in strins ins JSON.stringify(myObj)
sessionStorage.setItem("myInfo", JSON.stringify(myObj))//same goes for session storage
let LSinfs = localStorage.getItem("myInfo")
let SSinfs = sessionStorage.getItem("myInfo")

let toObj1 = JSON.parse(LSinfs)// now we'll convert that string again to an object
console.log("Local Storage ", toObj1);
console.log("Local Storage ", toObj1.name);

let toObj2 = JSON.parse(SSinfs)// now we'll convert that string again to an object   
console.log("Session Storage ", toObj2);
console.log("Session Storage ", toObj2.qualification);
