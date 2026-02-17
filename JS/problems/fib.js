var fib = function (n) {
    if (n <= 1) return n

    return fib(n - 1) + fib(n - 2);
};

console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))

var fact = function (n) {
    if (n <= 1) return 1    
    return n * fact(n - 1);
};

console.log("Factorial")
console.log(fact(0))
console.log(fact(1))
console.log(fact(2))
console.log(fact(3))
console.log(fact(4))
console.log(fact(5))