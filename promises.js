let func = new Promise((resolve,reject) => {
   let err = true;
   if(!err){
     resolve("The promise has been resolved") 
   }
   else{
     reject()
   }
})
func.then(result => console.log(result)).catch(err => console.log(err, "Request Failed!"))

//  let func1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let err = true
//       if (err){
//         console.log("In function, promise has been successful") 
//         resolve("In resolve: promise resolved")
//       }
//       else {
//         console.log("In function: promise has not been successful") 
//         reject("In reject: promise rejected");
//       }
//     }, 2000)
//   })
// }
// func1().then((success) => {
//   console.log("Success: "+success);
//   return "good"
// })
// .then((after) => {
//   console.log(after);
// }) 
// .catch((err) => {
//   console.log("Failure: " + err);
// });
// let func2 = () => {
//    return new Promise((resolve,reject) => {
//      let write = +prompt("What are your marks in english?");
//      if (write >= 33){
//        resolve("You are passed in english congrats")
//      }
//      else{
//        reject("You have failed in english, passing marks are atleast 33")
//      }
//    })
// }
// func2().then( (pass) => {
//   console.log("Passed: " +  pass);
// }) 
// .catch(fail => {
//   console.log("Failed: " + fail);
// // }) 
// let std = [{ name: "haseeb", standard: 10, subject: "computer" },
// { name: "ubaid", standard: 9, subject: "biology" },
// { name: "amaan", standard: 4, subject: "chemistry" }
// ]
// let enrollNew = (student) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       std.push(student)
//       let err = false
//       if(!err){
//         console.log("moiz enrolled");
//         resolve("new student enrolled")
//       }
//       else(
//         reject("An error has been occured")
//       )
//     }, 2000)
//   })

// }
// let showStd = () => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("starting");
//       let name = "";
//       let standard = "";
//       let subject = "";
//       std.forEach((item, index) => {
//         name = item.name
//         standard = item.standard
//         subject = item.subject
//         document.getElementsByClassName("students")[0].innerHTML += ``
//         document.getElementsByClassName("students")[0].innerHTML += `<p>${index + 1}     ${name}</p>`
//         document.getElementsByClassName("standard")[0].innerHTML += `<p>${standard}</p>`
//         document.getElementsByClassName("subjects")[0].innerHTML += `<p>${subject}</p>`
//       })
//     }, 1000)
//   })
 
// }
// let newStd = {
//   name: "moiz", subject: "english", standard: 5
// }


// console.log("it will be logged first");
// enrollNew(newStd)
// .then(showStd)
// .catch(err => console.log(err));

// async function asynco() {
//    await enrollNew(newStd)
//    showStd()
// }
// asynco()
// //promise.all

// const pro1 = () => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve(new Promise((resolve,reject) => {
//         resolve("subhan");
//       }))
//     },5000)
//   })
// }
// const pro2 = () => {
//   return new Promise((resolve,reject) => {
//     resolve("subhan");
//   })
// }
// const pro3 = () => {
//   return new Promise((resolve,reject) => {
//     resolve("muneeb");
//   })
// }
// const pro4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
// Promise.all([enrollNew(newStd),pro1(),pro2(),pro3(),pro4]).then(values => {
//   showStd();
//   console.log(values);
// })
// setTimeout(() => {
//   pro1().then(response => console.log(response));
// },6000)
//async  / await

