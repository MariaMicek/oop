const ArrayPusher = function() {

    this.array = []

}

ArrayPusher.prototype.push = function(x) {

    this.array.push(x)      // this.array = this.array.concat(x) 

}

ArrayPusher.prototype.sum = function() {

    let sum = 0
    for(let i = 0; i < this.array.length; i++){     // this.array.reduce((r, e) => r + e, 0)
        sum = sum + this.array[i]
    }
    return sum
}

ArrayPusher.prototype.average = function() {
    
    return this.sum() / this.array.length

}

const pusher1 = new ArrayPusher()
pusher1.push(1)
pusher1.push(4)
pusher1.push(5)
console.log(pusher1)
console.log(pusher1.sum())
console.log(pusher1.average())

const pusher2 = new ArrayPusher()
pusher2.push(10)
pusher2.push(14)
pusher2.push(6)
console.log(pusher2)
console.log(pusher2.sum())
console.log(pusher2.average())

