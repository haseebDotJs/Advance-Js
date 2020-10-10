let write = prompt("Write any number of characters, and you'll get the length of characters")
const calcLength = string1 => {
  let length1 = string1.length
  let length2 = string1.match(/[\S]/g).length
  console.log(length);
  alert(`The length of this string including spaces is ${length1} and excluding spaces is ${length2}`)
}
calcLength(write)