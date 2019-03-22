class ToDo {

    constructor(selector){

        this.container = document.querySelector(selector) || document.body

        this.tasks = JSON.parse(localStorage.getItem('to-do-list')) || []

        this.render()
    }

    addTask(newTaskText){

        const newTask = {
            text: newTaskText,
            isCompleted: false,
        }

        this.tasks = this.tasks.concat(newTask)

        this.render()
        this.saveTasks()
    }

    toggleTask(taskIndex){

        this.tasks = this.tasks.map(

            (task, index) => (
                index === taskIndex ?
                {
                text: task.text,
                isCompleted: !task.isCompleted
                }:
                task
            )
            
        )

        this.render()
        this.saveTasks()
    }

    saveTasks(){
        
        localStorage.setItem('to-do-list', JSON.stringify(this.tasks))
    }

    render(){

        this.container.innerHTML = ''
        this.renderFrom()

        this.tasks.forEach( 

            (task, index) => this.renderTask(task, index)
        )
    }

    renderTask(task, index){

        const div = document.createElement('div')
        div.innerText = task.text

        div.addEventListener(
            'click',
            () => this.toggleTask(index) 
        )

        if (task.isCompleted){
            div.style.textDecoration = 'line-through'
        }

        this.container.appendChild(div)
    }

    renderFrom(){

        const div = document.createElement('div')
        const input = document.createElement('input')
        const button = document.createElement('button')

        input.setAttribute('placeholder', 'Nowe Zadanie')
        button.innerText = 'DODAJ'

        button.addEventListener(
            'click',
            () => this.addTask(input.value)
        )

        div.appendChild(input)
        div.appendChild(button)
        this.container.appendChild(div)
    }

}

