function wave(input){
    if (input.length === 0) return [];

    const result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') continue;
        let newString = input.slice(0).split('');
        newString[i] = input[i].toUpperCase();
        result.push(newString.join(''));
    }

    return result;
}
