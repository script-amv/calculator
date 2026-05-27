const calculator = document.querySelector(".calculator")
const display = calculator.querySelector(".display")
const keypad = calculator.querySelector(".keypad")
const keys = keypad.querySelectorAll("div")

keys.forEach(key => key.onclick = () => alert(key.textContent))