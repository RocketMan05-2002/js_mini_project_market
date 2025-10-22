// rest operator collects all the arguments into an array
function sum(...numbers){
    console.log(numbers); // [ 1, 2, 3, 4 ]
    return numbers.reduce((total,item)=>total+item,0);
}

console.log(sum(1,2,3,4)); // 10

// spread opereator takes all the items from array and spreads them.

const nums = [1,2,3,4];
console.log(sum(...nums));