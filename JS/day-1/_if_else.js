checktruthyvalue = (value) => {
    if (value) {
        return "Value is truthy";
    } else {
        return "Value is falsy";
    }
};

// Example usage:
console.log(checktruthyvalue(5));        // Output: Value is truthy
console.log(checktruthyvalue(0));        // Output: Value is falsy
console.log(checktruthyvalue("Hello"));  // Output: Value is truthy
console.log(checktruthyvalue(""));       // Output: Value is falsy
console.log(checktruthyvalue([]));       // Output: Value is truthy
console.log(checktruthyvalue(null));     // Output: Value is falsy
console.log(checktruthyvalue(undefined));     // Output: Value is falsy
