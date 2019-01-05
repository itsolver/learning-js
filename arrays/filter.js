//filter
const array = [1,2,3,4,5,6];
const even = x => x % 2 === 0;
const evenArray = array.filter(even);
console.log(`Even numbers in array ${array}: ${evenArray}`);
// IT-Solver-Macbook-Air:arrays angus$ node filter.js
// Even numbers in array 1,2,3,4,5,6: 2,4,6