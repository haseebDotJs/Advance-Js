let phone = document.getElementsByClassName("phone")
let nic = document.getElementsByClassName("nic")
let name = document.getElementsByClassName("name")
let submit = document.getElementsByClassName("submit")
console.log(phone);
let invalid = document.getElementsByClassName("invalid")
phone[0].addEventListener("input", function(){
  // phone[0].value = Number(phone[0].value)
  console.log(typeof(phone[0].value))
  phone[0].value.match(/^[0-9]{12}$/)?
    invalid[0].style.visibility = "hidden":
    invalid[0].style.visibility = "visible"
})
nic[0].addEventListener("input", function(){
  nic[0].value.match(/^[0-9]{13}$/)?
    invalid[1].style.visibility = "hidden":
    invalid[1].style.visibility = "visible"
})
name[0].addEventListener("input", function(){
  name[0].value.match(/^[a-zA-Z\s]{1,}$/)?
    invalid[2].style.visibility = "hidden":
    invalid[2].style.visibility = "visible"
})
submit[0].addEventListener("click", function(){
  alert(`Thank you Mr.${name[0].value}`)
})