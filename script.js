const ArrayPusher = function(selector) {

    this.container = document.querySelector(selector) || document.body
    this.array = []
    this.inputValue = 0
    this.render()

}

ArrayPusher.prototype.render = function (){

    this.container.innerHTML = ''
    const input = document.createElement('input')
    const button = document.createElement('button')
    const numbers = document.createElement('p')
    const arrayContainer = this.renderNumbersArray()
    const sum = document.createElement('p')
    const average = document.createElement('p')

    this.container.appendChild(input)
    this.container.appendChild(button)
    this.container.appendChild(numbers)
    this.container.appendChild(arrayContainer)
    this.container.appendChild(sum)
    this.container.appendChild(average)

    input.setAttribute('type', 'number')
    input.value = this.inputValue
    button.innerText = "ADD"
    numbers.textContent = `Numbers: `
    sum.textContent = `Sum: ${this.sum()}`
    average.textContent = `Average: ${this.average()}`


    input.addEventListener(

        'input',
        event => this.inputValue = Number(event.target.value)

    )

    button.addEventListener(

        'click',
        () => this.push(this.inputValue)

    )

}

ArrayPusher.prototype.renderNumbersArray = function() {

    const arrayContainer = document.createElement('div')

    this.array.forEach( (number, index) => {

        const div = document.createElement('div')
        const buttonDelete = document.createElement('button')

        div.innerText = number
        buttonDelete.innerText = "DELETE"

        buttonDelete.addEventListener(
            'click',
            () => this.remove(index)
        )

        div.appendChild(buttonDelete)
        arrayContainer.appendChild(div)

    })

    return arrayContainer
}

ArrayPusher.prototype.push = function(newValue) {

    this.array = this.array.concat(newValue) 
    
    this.render()

}

ArrayPusher.prototype.remove = function(removedElementIndex) {

    this.array = this.array.filter((el,i) => i !== removedElementIndex)

    this.render()

}

ArrayPusher.prototype.sum = function() {

    let sum = 0
    for(let i = 0; i < this.array.length; i++){     // this.array.reduce((r, e) => r + e, 0)
        sum = sum + this.array[i]
    }
    return sum
}

ArrayPusher.prototype.average = function() {
    
    if (this.array.length === 0) return 0
    return this.sum() / this.array.length

}


