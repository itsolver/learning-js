//forEach
const array = [1,2,3,4,5,6];

array.forEach(function(currentValue, index, array) {
    console.log(`At index ${index} in array ${array} the value is ${currentValue}`);
});
// IT-Solver-Macbook-Air:arrays angus$ node forEach.js
// At index 0 in array 1,2,3,4,5,6 the value is 1
// At index 1 in array 1,2,3,4,5,6 the value is 2
// At index 2 in array 1,2,3,4,5,6 the value is 3
// At index 3 in array 1,2,3,4,5,6 the value is 4
// At index 4 in array 1,2,3,4,5,6 the value is 5
// At index 5 in array 1,2,3,4,5,6 the value is 6