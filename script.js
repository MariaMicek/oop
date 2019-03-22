//CONSTRUCTOR FUNCTION
function CarConstructor () {
    this.fuelTank = 100
}

CarConstructor.prototype.move = function() {
    this.fuelTank = this.fuelTank - 10
}

const car1 = new CarConstructor()
car1.move()
console.log(car1)


//CLASS
class Car {                         // bez nawisów

    constructor(){                  //w klasie funkcje (metody) zapisuje się bez słówka function, wszystko ląduje w class body, właściwości w funkcji constructor, a zwykłe metody oddzielnie
        this.fuelTank = 100         //constructor wywoła się poprzez tworzenie nowego obiektu ze słówkiem new
    }

    move(){
    this.fuelTank = this.fuelTank - 10
    }

}

const car2 = new Car()
car2.move()
console.log(car2)



class Person {

    constructor(name){
        this.name = name
    }

}

const person1 = new Person('Marysia')
console.log(person1)
