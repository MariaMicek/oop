function Square(color) {

    this.element = document.createElement('div')
    this.element.style.width = '200px'
    this.element.style.height = '200px'
    this.element.style.margin = '10px'
    this.element.style.backgroundColor = color || 'red'
    document.body.appendChild(this.element)
    
}

Square.prototype.changeColor = function (color) {
    this.element.style.backgroundColor = color
}

let arrayOfSquares = []
for (let i = 0; i < 3; i++) {
    arrayOfSquares = arrayOfSquares.concat(new Square())
}

//CIRCLE

function Circle() {

    this.element = document.createElement('div')
    this.element.style.width = '200px'
    this.element.style.height = '200px'
    this.element.style.borderRadius = '100px'
    this.element.style.backgroundColor = 'red'
    document.body.appendChild(this.element)

    this.element.addEventListener(

        'click',
        () => this.toggleColor('green')
    )
   
}

Circle.prototype.toggleColor = function () {

    if (this.element.style.backgroundColor === 'red'){
        this.changeColor('green')
    } else {
        this.changeColor('red')
    }

}

Circle.prototype.changeColor = function (color) {

    this.element.style.backgroundColor = color

}

let arrayOfCircles = []
for (let i = 0; i < 3; i++) {
    arrayOfCircles = arrayOfCircles.concat(new Circle())
}



