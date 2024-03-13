function sum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += i;
    }
    return sum;
}

module.export = sum;