let names = ["Rose", "Annalee", "Jack", "Chad", "Emma", "Brooks", "Jean"];
console.log(names);

let student = {
    name : "Annalee",

    class : "WDD131",

    grade : 98

}

console.log(student);
console.log(student.name);

let ages = [8, 6, 7, 5, 3, 0, 9]

names.forEach((name) => {
console.log(name)
})

let newNameArray = names.map((name) => {
    return name + " Garcia"
})

console.log(newNameArray)

let filteredArray = names.filter((name) => {
    return name[0] === 'C'
})

console.log(filteredArray)

let reducedArray = ages.reduce((age) => {
    return age
})

console.log(reducedArray)

let index = names.indexOf("Annalee");

console.log(index)

let templateLiterals = `I guess
it just creates a
multi-line string.
We'll probably discuss more
applications of this later`

console.log(templateLiterals)