const throwDice = () => {
    let num = Math.min(Math.floor(Math.random() * 10), 6)

    if( num == 0) num += 1

    console.log(num)
}

throwDice()