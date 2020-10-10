fetch('https://jsonplaceholder.typicode.com/todo/1',)
.then(response => {
    return response.json()
})
.then(json => console.log(json))
.catch(err => console.log(err.message))
// let myObj = {
//     name: 'haseeb',
//     age: 17,
//     qualification: "matric"
// }
// let string = JSON.stringify(myObj);
// console.log(string.json());