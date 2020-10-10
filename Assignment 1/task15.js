// let any = prompt("Write any string or digits");
// console.log(typeof +any);

const whatIz = (any) => {
  if (typeof any === "string") {
    return `Welcome ${any}`
  }
  else if (typeof any === "number"){
    return `${any * any}`
  }
}
let see = whatIz("/")
console.log(see);