// uwtórz 100 samochodów z różnym paliwem

// for (i = 0; i < 100; i++){
//     cars.push({
//         fuelTank: 100 - i,
//     })
// }

// const makeCar = function(fuelTank) {
//     return{
//         fuelTank: fuelTank,
//         move: function (combustion){
//             this.fuelTank = this.fuelTank - combustion
//         }
//     }
// }

// const cars = [];

// for (i = 0; i < 100; i++){
//     const car = makeCar(100 - i)
//     cars.push(car)
// }

// console.log(cars)

// const car10 = cars[9]
// car10.move(10)

// console.log('car10: ', car10)


function Car() {
    this.fuelTank = 100
}

Car.prototype.move = function (){
    this.fuelTank = this.fuelTank - 10
}

const car1 = new Car()
const car2 = new Car()

console.log(car1)
console.log(car2)
console.log(car1 === car2)




