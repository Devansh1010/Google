const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
// console.log(ingredientsListCopy);
ingredientsList.unshift("sauce");

// console.log(ingredientsListCopy);// ["noodles",{"list":["eggs","flour","water"]}]
// console.log(ingredientsList);

const years = [1990, 1984, 2000, 1965, 2023];

// console.log(years['02']); 
// console.log(years['2']); 
// console.log(Object.keys(years)); // ['0', '1', '2', '3', '4']
// console.log(Object.values(years)); // [1990, 1984, 2000, 1965, 2023]
``

const sortedYears = years.sort();
// console.log(sortedYears); // [1965, 1984, 1990, 2000, 2023]

years[10] = 2026

// console.log(Object.keys(years))
// console.log(years.length)
console.log(years)

//lets try decreaing the length
years.length = 2; // deletes all elements after index 1
// console.log(years) // [1990, 1984]


// ! Study and Decode this code effects
const products = [
    { name: 'VIVO' },
    { name: 'OPPO' },
    { name: 'CMF' },
]

console.log(products)

const updatedProducts = products.map((product) => {
    product.price = 200
})

console.log(products)

/*
The Problem: Given an array of integers, move all the zeroes to the end of it while maintaining the relative order of the non-zero elements.

Example: [0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0]

Constraint: You must do this in-place without making a copy of the array. */

//bug: splice inside forEach creates problem of index shifting and misses some elements
const removeNumbers = (arr, num) => {
    if (!Array.isArray(arr) && Number(num)) {
        console.log('Provide valid Input')
        return
    }
    let count = 0
    arr.forEach((el, ind) => {
        if (arr[ind] == num) {
            count++;
            arr.splice(ind, 1)
        };
    })

    for (let i = 0; i < count; i++) {
        arr.push(num)
    }
}

//optimized approach
const moveZeroes = (arr) => {
    // return if array is empty or has only one element
     if (arr.length == 0 || arr.length == 1){
        return
    }

    let lastNonZeroFoundAt = 0;

    // Phase 1: Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[lastNonZeroFoundAt] = arr[i];
            lastNonZeroFoundAt++;
        }
    }

    // Phase 2: Fill the rest with zeroes
    for (let i = lastNonZeroFoundAt; i < arr.length; i++) {
        arr[i] = 0;
    }
};

const arr = [0, 1, 0, 3, 12]

console.log(arr)