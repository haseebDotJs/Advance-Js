// let students = [{name: "Haseeb", subject: "Web development"},{name: "Subhan",subject: "Python"}]

// let enroll = (student,callback) => {
//   setTimeout(()=> {
//      students.push(student)
//      console.log("New student enrolled");
//      callback()
//   },3000)
// }
// let get = () => {
//    setTimeout(() => {
//       let name = "";
//       let subs = "";
//       students.forEach(wholeData =>{
//          console.log(wholeData.name);
//         name += `<p> ${wholeData.name} </p>`;
//         subs += `<p> ${wholeData.subject} </p>`
//         console.log(name);
//       })
//       document.getElementsByClassName("students")[0].innerHTML += name 
//       document.getElementsByClassName("subjects")[0].innerHTML += subs 
//    },1000)
// }
// enroll({name: "muneeb", subject: "Amazon"},get)

let std = [{ name: "haseeb", standard: 10, subject: "computer" },
{ name: "ubaid", standard: 9, subject: "biology" },
{ name: "amaan", standard: 4, subject: "chemistry" }
]
let enrollNew = (student, callback) => {
   setTimeout(() => {
      std.push(student)
      console.log("new student enrolled");
      callback()
   }, 2000)
}
let showStd = () => {
   setTimeout(() => {
      let name = "";
      let standard = "";
      let subject = "";
      std.forEach((item,index) => {
         name = item.name
         standard = item.standard
         subject = item.subject
         document.getElementsByClassName("students")[0].innerHTML += ``
         document.getElementsByClassName("students")[0].innerHTML += `<p>${index + 1}   ${name}</p>`
         document.getElementsByClassName("standard")[0].innerHTML += `<p>${standard}</p>`
         document.getElementsByClassName("subjects")[0].innerHTML += `<p>${subject}</p>`
      })
   },1000)

}
let newStd = {
   name: "moiz", subject: "english", standard: 5
}
enrollNew(newStd,showStd)
// showStd()
