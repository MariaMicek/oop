class Animal {

    constructor(legs, sound){
        this.legs = legs
        this.sound = sound
    }

    makeSound(){
        console.log(this.sound)
    }

    sayHello(){
        if (this.name){
            console.log(`Hello, I am ${this.name}`)
        } else {
            console.log('I don\'t have a name...')
        }
    }

}
const animal1 = new Animal(8, 'Wrrrr')
console.log(animal1)
console.log(animal1.makeSound())
console.log(animal1.sayHello())



class Dog extends Animal {              //dziedziczenie

    constructor(name){
        super(4,'Woof!')             // super() wywołuje constructor klasy nadrzędnej
        this.name = name
    }

}
const dog1 = new Dog('Puszek')
console.log(dog1)
console.log(dog1.makeSound())
console.log(dog1.sayHello())



class Cat extends Animal {

    constructor(name){
        super(4, 'Meow...')
        this.name = name
    }
}
const cat1 = new Cat('Mruczek')
console.log(cat1)
console.log(cat1.makeSound())
console.log(cat1.sayHello())




