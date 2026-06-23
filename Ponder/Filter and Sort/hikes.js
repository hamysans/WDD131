const names = [{name: "James", age: 33}, 
    {name:"Bob", age: 12}, 
    {name:"Josh", age: 47}];


names.sort(lateForDinner);

console.log(names)

function lateForDinner(a, b) {
    console.log("67")
    let aName = a.name.toLowerCase();
    let bName = b.name.toLowerCase();

    if (aName < bName) {
        return -1;
    }
    else if (aName > bName) {
        return 1;
    }
    return 0;
}
