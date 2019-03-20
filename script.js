//first example

function makeSound(){
    console.log(this.sound)
}

console.log(makeSound())

const cat1 = {
    sound: 'Meow!',
    makeSound: makeSound,
}

console.log(cat1.makeSound())
console.log(makeSound === cat1.makeSound)

const cat2 = {
    sound: 'Meow! Meow!',
    makeSound: makeSound,
}

console.log(cat2.makeSound())

    
//second example

console.log(this);

function that() {
    console.log(this);
}

that();

const me = {
    name: 'Marysia',
    showMe: that,
}

me.showMe();


//third example

function removeLeg(){
    this.legs = this.legs - 1;
    if (this.legs < 0) {this.legs = 0}
}

function removeLegs(numberOfLegs){
    this.legs = this.legs - numberOfLegs;
    if (this.legs < 0) {this.legs = 0}
}

const chair = {
    legs: 4,
    removeLeg: removeLeg,
    removeLegs: removeLegs,
}

chair.removeLeg();
chair.removeLeg();
chair.removeLegs(3);

console.log(chair.legs)
