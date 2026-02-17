
// day 2
const arr = [];

// const sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });  // TypeError: Reduce of empty array with no initial value

// const total = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0); // when array is empty, returns the initial value
// console.log(total);


// day 4

// const inventory = [
//     { name: 'apple', quantity: 2, utility: 'food' },
//     { name: 'hammer', quantity: 1, utility: 'tool' },
//     { name: 'banana', quantity: 5, utility: 'food' },
//     { name: 'screwdriver', quantity: 3, utility: 'tool' },
// ];

// const result = inventory.reduce((report, item) => {
//     const category = item.utility;
//     const count = item.quantity;

//     // Logic: If category doesn't exist, start at 0, then add quantity
//     report[category] = (report[category] || 0) + count;

//     // CRITICAL: You must return the report for the next iteration
//     return report;
// }, {}); // <--- Initialize as an Object, not 0

// console.log(result); 
// // Output: { food: 7, tool: 4 }


// const newResult = inventory.reduce(
//     (report, item)=> {
//         report[item.utility] = (report[item.utility] || 0) + item.quantity
//         return report
//     }, []
// )

// console.log(newResult)

const task = [
    { id: 1, title: 'Task 1', completed: false, priority: 3 },
    { id: 2, title: 'Task 2', completed: false, priority: 2 },
    { id: 3, title: 'Task 3', completed: true, priority: 1 },
]


// const result = task.filter((task)=> !task.completed).sort((a, b) => {
//     console.log(`a: ${a.title}, b: ${b.title}`)
//     return a.priority - b.priority
// })
// const result = task.reduce(
//     (report, task) => report[task] = (!task.completed), {}
// )

// console.log(result)

const movieRatings = [
    {title: 'Movie A', ratings: [4,5,3]},
    {title: 'Movie B', ratings: [5,5,4]},
    {title: 'Movie C', ratings: [3,4,2]},
    {title: 'Movie D', ratings: [2,3,4]},
]

const movieRatingsResult = movieRatings.map(
    (movie) => {
        const totalRatings = movie.ratings.reduce(
            (acc, rating) => acc + rating, 0
        )
        const avgRating = totalRatings / movie.ratings.length
        return {title: movie.title, averageRating: avgRating.toFixed(2)}
    }
)

// console.log(movieRatingsResult)

// The Task: From the inventory below, get the total quantity of only the food items.
const inventory = [
    { name: 'apple', quantity: 2, utility: 'food' },
    { name: 'hammer', quantity: 1, utility: 'tool' },
    { name: 'banana', quantity: 5, utility: 'food' },
    { name: 'screwdriver', quantity: 3, utility: 'tool' },
];

const inventoryResult = inventory
    .filter((item) => item.utility == 'food')
    .reduce((acc, item)=> acc[item.utility] = (acc[item.utility] || 0) + item.quantity, 0)

    // console.log(inventoryResult)


    /** Create a pipeline that:

Filters out students with a score below 50 (the "fail" mark).

Maps the remaining names to Uppercase (e.g., "PRIYA").

Reduces them into a single string like: "Passed: PRIYA, RAJ"
*/
const students = [
    { name: 'Aman', score: 45 },
    { name: 'Priya', score: 85 },
    { name: 'Raj', score: 92 },
    { name: 'Suman', score: 30 }
];

const studentResult = students
    .filter((studuntReport) => studuntReport.score > 50)
    .map((studuntReport)=> studuntReport.name.toUpperCase())
    .reduce((acc, studuntReport)=> acc += studuntReport + ", ", "Passed: ")

console.log(typeof studentResult)