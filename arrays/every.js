//every
//got an array and want to test if a given condition is met in every element?
const array = [1,2,3,4,5,6];
const underSeven = x => x < 7;

if (array.every(underSeven)) {
    console.log('Every element in the array is less than 7');
} else {
    console.log('At least one element in the array was bigger than 7');
}
// IT-Solver-Macbook-Air:arrays angus$ node every.js
// Every element in the array is less than 7