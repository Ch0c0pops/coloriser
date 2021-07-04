const container = document.querySelector('.container')
const squareAmount = 3047
const colors=['#57bd72', '#38ffd7', '#ff3b38', '#f531e8', '#397ff7', '#4cf739']

for (let i = 0; i < squareAmount; i++) {

    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> onMouseover(square))
    square.addEventListener('mouseleave', ()=> onMouseleave(square))

    container.append(square)
}

function onMouseover(elem){
    const color = randomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function onMouseleave(elem){
    elem.style.backgroundColor = 'rgb(46, 46, 46)';
    elem.style.boxShadow = `0 0 2px rgb(46, 46, 46)`
}

function randomColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}
