const numbers = [1,1,2,2,2,3,3,4,5,6,6,6];

const nums = new Set(numbers);

nums.add(7);
nums.delete(2);

console.log(nums.has(2)); // false

console.log(nums.size); // 6
console.log(nums);
console.log(typeof nums);

// what if i want to convert nums back to array
console.log(Array.from(nums));

/* 
false
6
Set(6) { 1, 3, 4, 5, 6, 7 }
object
[ 1, 3, 4, 5, 6, 7 ]
*/