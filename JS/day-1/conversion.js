let number = '42'; // type is string
let convertedNumber = Number(number); // type is number
let convNum = +'42'; // unary plus operator to convert string to number

// console.log("The convNum is:", convNum);
// console.log("The convertedNumber is:", convertedNumber);

let str = '42ab' ; // type is string
let data = ''; // parseInt and parseFloat give NaN if conversion fails in this case result will be NaN

let convNumber = parseInt(str); // converts string to integer, stops at first non-numeric character
let convFloat = parseFloat(str); // converts string to float, stops at first non-numeric character
// console.log("The convNumber is:", convNumber); // 42


const newData = 100

let strData = String(newData); // converts number to string
let strData1 = newData.toString(); // converts number to string
let strData2 = JSON.stringify(newData); // converts number to string

// the difference between String() and toString() is that String() can handle null and undefined without throwing an error, while toString() will throw an error if called on null or undefined. and JSON.stringify() is mainly used for converting objects to JSON strings, but it can also convert primitive values like numbers to strings.

// console.log("The strData is:", strData); // "100"
// console.log("The strData1 is:", strData1); // "100"

