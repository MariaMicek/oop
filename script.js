//EXERCISE 1
const Person = function (name, lastname) {

    this.name = name;
    this.lastname = lastname;

}

Person.prototype.laugh = function () {
    console.log('ha ha ha')
}

const Marysia = new Person('Marysia', 'Micek');
const Ala = new Person('Ala', 'Pfsjgg')
console.log(Marysia)
console.log(Ala.laugh())
console.dir(Person)


//EXERCISE 2
const Result = function(a, b) {

    this.sum = a + b;
    this.minus = a - b;
    this.multiply = a * b;
    this.divide = a / b;

}

const sum1 = new Result(1, 4)
const sum2 = new Result(3, 4)
console.log(sum1)
console.log(sum2)
console.dir(Result)


//EXERCISE 3
const Square = function (x) {

    this.square = x * x;
    this.reverse = Math.sqrt(this.square)

}

const result = new Square(1)
const result1 = new Square(2)
console.log(result)
console.log(result1)


//EXERCISE 4
const Power = function (number, factor) {

    let sum = 1;
    for(let i = 0; i < factor; i++) {
        sum = sum * number
    }
    this.powered = sum
}

const poweredResult1 = new Power(2,1)
const poweredResult2 = new Power(2,2)
const poweredResult3 = new Power(2,3)
console.log(poweredResult1)
console.log(poweredResult2)
console.log(poweredResult3)



