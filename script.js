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
    move: move,
}

car1.move(10)
car1.move(20)

car2.move.call(car1, 10)        //gdy funkcja ma więcej parametów to należy podać więcej argumentów 
car2.move.apply(car1, [20])     //działa tak samo
car2.move(10)

console.log('car1: ', car1)
console.log('car2: ', car2)
