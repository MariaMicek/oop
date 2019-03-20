//state
function Counter () {
    this.number = 0
    this.render()
}

//action
Counter.prototype.inc = function (){
    this.number = this.number + 1
    this.render()
}

Counter.prototype.minus = function () {
    this.number = this.number - 1
    this.render()
}

//view
Counter.prototype.render = function (){
    document.body.innerHTML = ''

    const h1 = document.createElement('h1')
    const button = document.createElement('button')
    const button2 = document.createElement('button')


    button.innerHTML = '+'
    button2.innerHTML = '-'
    h1.innerText = this.number

    document.body.appendChild(h1)
    document.body.appendChild(button)
    document.body.appendChild(button2)

    document.body.style.display = 'flex'
    document.body.style.flexWrap = 'wrap'
    document.body.style.textAlign = 'center'
    document.body.style.justifyContent = 'center'
    h1.style.width = '100%'
    h1.style.fontSize = '50px'
    button.style.width = '15%'
    button.style.height = '50px'
    button.style.marginRight = '5px'
    button.style.fontSize = '25px'
    button2.style.width = '15%'
    button2.style.height = '50px'
    button2.style.fontSize = '25px'

    button.addEventListener(
        'click', 
        this.inc.bind(this)        
    )

    button2.addEventListener(
        'click', 
        () => this.minus()
    )
}







