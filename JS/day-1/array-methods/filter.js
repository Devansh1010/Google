const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]



//you can define the function and pass the reference of it
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]


// here we use filter to find prime numbers because filter expects a function that returns true or false

// map returns a new array with modified elements
// filter returns a new array with elements that pass the test
// reduce returns a single value after applying a function to each element
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  //for 4 how does this work?
  // this condition is skipped as 4 % 2 === 0
  // because 4 is even, it's not prime
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

const newArray = [];
for(let i =2; i<=30; i++){
    newArray.push(i);
}


