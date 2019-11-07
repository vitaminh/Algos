var fibonacci = function(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    let numbers = [0, 1];
    let i = 2;
    while (i <= n) {
        let temp = numbers[1];
        numbers[1] = numbers[0] + numbers[1];
        numbers[0] = temp;
        i++;
    }

    return numbers[1];
}
