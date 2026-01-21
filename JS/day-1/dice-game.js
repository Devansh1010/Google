const throwDice = () => {
    let num = Math.min(Math.floor(Math.random() * 10), 6)

    if( num == 0) num += 1

    console.log(num)
}

throwDice()

// A more concise way to write the same function
const rollDice = (sides = 6) => {
    // Standard Formula: Math.floor(Math.random() * sides) + 1
    const result = Math.floor(Math.random() * sides) + 1;
    console.log(result);
};

rollDice();