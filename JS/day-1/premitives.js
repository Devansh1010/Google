let number = 42; // type is number

let number1 = new Number(42); // type is object

// When you call Number() without the new keyword, it performs type coercion.

// This behavior happens with the three main "wrapper" types in JavaScript: Number, String, and Boolean.

// Type,      Function Call (Primitive),      Constructor Call (Object)
// Number,   "Number(""42"") → 42",           new Number(42) → [Number: 42]
// String,   "String(100) → "100",           "new String(""hi"") → [String: ""hi""]"
// Boolean,   Boolean(1) → true,             new Boolean(true) → [Boolean: true]

// console.log("The number1 is:", typeof number1);
// console.log("The number is:", typeof number);

let str = "Hello, World!"; // type is string
let str1 = new String("Hello, World!"); // type is object   

// console.log("The str1 is:", typeof str1);
// console.log("The str is:", typeof str);

let bool = true; // type is boolean
let bool1 = new Boolean(true); // type is object

// console.log("The bool1 is:", typeof bool1);
// console.log("The bool is:", typeof bool);

let nothing = null; // type is object
let notDefined; // type is undefined

console.log("The nothing is:", typeof nothing);
console.log("The notDefined is:", typeof notDefined);
console.log(null) // null
console.log(undefined) // undefined
console.log(undefined == null) // true
console.log(undefined === null) // false