const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const submitBtn = document.getElementById('submit')
let action = '+'

plusBtn.onclick = function () {
  action = '+'
}
minusBtn.onclick = function () {
  action = '-'
}
multiplyBtn.onclick = function () {
  action = '*'
}
divideBtn.onclick = function () {
  action = '/'
}

  function colorResult(result) {
    if (result < 0) {
      resultElement.style.color = 'red'
    } else {
      resultElement.style.color = 'green'
    }
    resultElement.textContent = result
  }

function computeNumbersWithAction(inp1, inp2, actionSimbol) {
  const num1 = Number(inp1.value)
  const num2 = Number(inp2.value)
  if (actionSimbol == '+') {
    return num1 + num2
  } 
  else if (actionSimbol == '-') {
    return num1 - num2
  } 
  else if (actionSimbol == '*') {
    return num1 * num2
  } 
  else if (actionSimbol == '/') {
    return num1 / num2
  }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  colorResult(result)
  //console.log(result)
}