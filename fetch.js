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
let github = () => {
  fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      for (let i in data) {
        console.log("name: ", data[i].id, data[i].login);
      }
    })
}
github()
//now learning about post request
// let post = () => {
//   let datas = {
//     name: "haseeb1234",
//     salary: `${10000}USD` ,
//     id: 21,
//     age: 17
//   }
//   let post = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(datas)
//   }
//   fetch("http://dummy.restapiexample.com/api/v1/create", post).then(response => response.json()).then(data => {
//     console.log(data.data);
//   })
// }
// post()
// let quotes = () => {
//   let fetching =  fetch("http://api.quotable.io/random")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.content)
//     return data.content
//   });
//   return fetching
// }

// console.log("hello world");
// let testing = () => {
//   console.log('Tesing async and await');
// }
// testing()
