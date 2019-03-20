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

//view
Counter.prototype.render = function (){
    document.body.innerHTML = ''

    const h1 = document.createElement('h1')
    const button = document.createElement('button')

    button.innerHTML = '+'
    h1.innerText = this.number

    document.body.appendChild(h1)
    document.body.appendChild(button)
    button.addEventListener(
        'click', 
        this.inc.bind(this)         // () => this.inc()     the same
    )
}





