const arr = [];

const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});  // TypeError: Reduce of empty array with no initial value

const total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // when array is empty, returns the initial value
console.log(total);