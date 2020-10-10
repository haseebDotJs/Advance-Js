let inputs = document.getElementsByTagName("input")
inputs[0].addEventListener("input", () => {
    sessionStorage.setItem("username", inputs[0].value)
})
inputs[1].addEventListener("input", () => {
    sessionStorage.setItem("password", inputs[1].value)
})
inputs[2].addEventListener("click", () => {
    sessionStorage.removeItem("password")
})
