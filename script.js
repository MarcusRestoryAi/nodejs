const {animal, house} = require("./animal")

let colors = ["Green", "Yellow", "Red", "Blue"]

colors.forEach((color) => {
    console.log(color)
})

let cat = new animal("Elvis", 10)
cat.toString()

cat.birthday()
cat.toString()

let home = new house("green", 3)
console.log(home.color)