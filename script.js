console.log('Hello')

let title = document.getElementById('title')

console.log('before:', title.innerText)

let message = 'Goodbye my lover!'
title.innerText = message;
console.log('after:', title.innerText)

title.innerHTML = `<p>${message}</p>`

title.style.color = 'red'
title.style.backgroundColor = 'cyan'

// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')

// redDiv.onclick = () => {
//   console.log('user chose: Rock')
// }
// yellowDiv.onclick = () => {
//   console.log('yellow')
// }
// greenDiv.onclick = () => {
//   console.log('green')
// }

// const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

//forEach
// const timesClicked = {'red': 0, 'yellow':0, 'green': 0}
// squares.forEach(square => {
//   square.onclick = () => {
//     timesClicked[square.value] += 1
//     square.innerText = timesClicked[square.value]
//     // console.log(square.value)
//   }
// })


// const clearBtn = () => {
//   squares.forEach(square => square.innerText = ' ')
// }
// const clearGameBtn = document.getElementById('clear')
// clearGameBtn.onclick = () => clearBtn()



// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')

// const squares = document.querySelectorAll('.colorSquare')
// const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
// squares.forEach(square => {
//   square.onclick = () => {
//     timesClicked[square.value] += 1
//     square.innerText = timesClicked[square.value]
//   }
// })

// const clearBtn = () => {
//   squares.forEach(square => square.innerText = ' ')
// }
// const clearGameBtn = document.getElementById('clear')
// clearGameBtn.onclick = () => clearBtn()

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

const squares = document.querySelectorAll('.colorSquare')
const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})

const clearBtn = () => {
  squares.forEach(square => square.innerText = ' ')
}
const clearGameBtn = document.getElementById('clear')
clearGameBtn.onclick = () => clearBtn




