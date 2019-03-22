class Counter {

    constructor(){
        this.number = 0
    }

    inc(){
        this.number = this.number + 1
    }

    minus(){
        this.number = this.number - 1
    }
}

const counter1 = new Counter()
console.log(counter1)

counter1.inc()
counter1.inc()
counter1.inc()
console.log(counter1)

counter1.minus()
counter1.minus()
console.log(counter1)