// let jsonPlaceholder = () => {
//   github()
//   fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data => {
//     console.log(data);
//     for (let i in data) {
//       console.log("title ", data[i].title);
//     }
//   }).catch(error => {
//     console.log("Request Failed");
//   })
// }
// let async = async () => {
//   console.log("Before fetching");
//   const fetching = await setTimeout(()=>fetch("https://jsonplaceholder.typicode.com/posts"),2000)
//   console.log("fetching 15",fetching);
//   console.log("After fetching");
//   console.log("before taking response");
//   const takingResponse = await fetching.json()
//   console.log(takingResponse);
//   console.log("after taking response");
//   return takingResponse
// }
// console.log("Before calling function");
// console.log("logging function ",async());
// console.log("after calling function");

let std = [{ name: "haseeb", standard: 10, subject: "computer" },
{ name: "ubaid", standard: 9, subject: "biology" },
{ name: "amaan", standard: 4, subject: "chemistry" }
]
let enrollNew = (student) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      std.push(student)
      let err = false
      if(!err){
        resolve("new student enrolled")
      }
      else(
        reject("An error has been occured")
      )
    }, 2000)
  })
}
let showStd = () => {
  setTimeout(() => {
    console.log("starting");
    let name = "";
    let standard = "";
    let subject = "";
    std.forEach((item, index) => {
      name = item.name
      standard = item.standard
      subject = item.subject
      document.getElementsByClassName("students")[0].innerHTML += ``
      document.getElementsByClassName("students")[0].innerHTML += `<p>${index + 1}     ${name}</p>`
      document.getElementsByClassName("standard")[0].innerHTML += `<p>${standard}</p>`
      document.getElementsByClassName("subjects")[0].innerHTML += `<p>${subject}</p>`
    })
  }, 1000)
}
let newStd = {
  name: "moiz", subject: "english", standard: 5
}

// enrollNew().then(showStd())
