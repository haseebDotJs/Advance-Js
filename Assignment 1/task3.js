let whiteSpaces = prompt("Write any input and the white spaces will be removed")
const removing = str => {
  let remove = str.match(/[\S]/g)
  console.log(remove);
  let joining = remove.join("")
  console.log(joining);
  alert(joining)
  // alert(remove)
}
removing(whiteSpaces)