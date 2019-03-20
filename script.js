function move(burnt) {
    this.fuelTank = this.fuelTank - burnt

    if (this.fuelTank < 0) this.fuelTank = 0
}

const car1 = {
    fuelTank: 100,
    move: move,
}

const car2 = {
    fuelTank: 150,
    move: move.bind(car1),      //przypisuje funkcje z car1 do car2 (spina je ze sobą), czyli wywołuje ją na car1 a nie na car2
}

car1.move(10)
car1.move(20)

car2.move(10)
car2.move(20)
car2.move(5)


console.log('car1: ', car1)
console.log('car2: ', car2)
