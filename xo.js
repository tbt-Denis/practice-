const board = document.querySelector('#board')
const color = '#e30c3c'
const SQUARES_NUMBER = 9
let clickedSquare = []
let clickedSquareRed = []
let clickedSquareGreen = []
let next = 'red'

for (let i=0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div') // квадратик
  square.classList.add('square')
  square.id = i
  
  square.addEventListener('mouseover', () => // когда наводим мышку
  squareOver(square))

  square.addEventListener('mouseleave', () => // когда наводим мышку
  removeColor(square))

  square.addEventListener('click', () => 
  choosenSquare(square))

  board.append(square) // добавить на доску квадратик
}

function squareOver(element) {
    if (!clickedSquare.includes(element.id) && next === 'red')
    {
    element.style.backgroundColor = 'red'
    element.style.boxShadow = `0 0 2px ${'red'}, 0 0 10px ${'red'}`
    }
    else if (!clickedSquare.includes(element.id) && next === 'green') 
    {
        element.style.backgroundColor = 'green'
        element.style.boxShadow = `0 0 2px ${'green'}, 0 0 10px ${'green'}`
    }
}

function removeColor (element) {
    if (!clickedSquare.includes(element.id))
    {
    element.style.backgroundColor = 'rgb(87, 87, 87)'
    element.style.boxShadow = `0 0 2px #000`
    }
}

function choosenSquare(element) {
        if (!clickedSquare.includes(element.id)) {
        clickedSquare.push(element.id)
        if (next === 'red') {
            clickedSquareRed.push(element.id)
            element.style.backgroundColor = 'red'
            console.log( clickedSquare, 'RED', clickedSquareRed)
            rules(clickedSquareRed)
            next = 'green'
            }
        else if (next === 'green') {
                clickedSquareGreen.push(element.id)
                element.style.backgroundColor = 'green'
                console.log(clickedSquare, 'GREEN', clickedSquareGreen)
                rules(clickedSquareGreen)
                next = 'red'
        }
    }
}

function rules(array) {
    if (array.includes('0') && array.includes('3') && array.includes('6'))
    {
        console.log(`Победил ${next}`)
        console.log(endGame())
    }
}
