//some
//Test if at least one element matches our boolean function.
const array = [1,2,3,9,5,6,4];
const overSeven = x => x > 7;

if (array.some(overSeven)) {
    console.log('At least one element bigger than 7 was found');
} else {
    console.log('No element bigger than 7 was found');
}
// IT-Solver-Macbook-Air:arrays angus$ node some.js
// At least one element bigger than 7 was found