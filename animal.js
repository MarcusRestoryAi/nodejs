class animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    toString() {
        console.log(`Detta djuret heter ${this.name} och är ${this.age} år gammal`)
    }

    birthday() {
        this.age++;
    }
}

class house {
    constructor(color, floors){
        this.color = color
        this.floors = floors
    }
}

module.exports = {animal, house}