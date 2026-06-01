const calculator = document.querySelector(".calculator")
const display = calculator.querySelector(".display")
const keypad = calculator.querySelector(".keypad")
const keys = keypad.querySelectorAll("div")

keys.forEach(key => key.onclick = () => display.textContent += key.textContent)

const evaluate = keypad.querySelector(".evaluate")
evaluate.onclick = () => display.textContent = eval(display.textContent)

const clear = keypad.querySelector(".clear")
clear.onclick = () => display.textContent = ""

const del = keypad.querySelector(".del")
del.onclick = () => display.textContent = display.textContent.slice(0, -1)

