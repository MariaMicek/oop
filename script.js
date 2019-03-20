// uwtórz 100 samochodów z różnym paliwem

// for (i = 0; i < 100; i++){
//     cars.push({
//         fuelTank: 100 - i,
//     })
// }

const makeCar = function(fuelTank) {
    return{
        fuelTank: fuelTank,
        move: function (combustion){
            this.fuelTank = this.fuelTank - combustion
        }
    }
}

const cars = [];

for (i = 0; i < 100; i++){
    const car = makeCar(100 - i)
    cars.push(car)
}

console.log(cars)

const car10 = cars[9]
car10.move(10)

console.log('car10: ', car10)