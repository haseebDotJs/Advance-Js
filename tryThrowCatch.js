// try{
//     let whatIsName = prompt("What is your Name?")
//     let check = /^[a-zA-z]{1,}$/g.test(whatIsName)
//     if(check){
//         alert(`Hello ${whatIsName}`)
//     }
//     else{
//         throw 'We are expecting your name in A-Z alphabets'
//     }
// }
// catch(err){
//   console.log(err);
// }
let jsonData = '{"age": 17,"qualification": "matric","nam": "Haseeb"}'

try{
    let data = JSON.parse(jsonData)
    console.log(data);
    if(data.name){
        console.log(data.name);
    }
    else{
        throw "Incomplete Data: name doesn't exist"
    }
    
}
catch(err){
    console.log(`New Error ${err}`);
}
finally{
    console.log("Fianally try catch and through are over");
}
