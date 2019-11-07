function fizzBuzzCuckooClock(time) {
    // convert time string to integers
    const convertedTime = time.split(':');
    let hours = parseInt(convertedTime[0], 10);
    const minutes = parseInt(convertedTime[1], 10);

    let output = '';

    if (minutes === 30) {
        output = 'Cuckoo';
    }
    else if (minutes === 0) {
        if (hours > 12) {
            hours -= 12;
        }
        if (hours === 0) {
            hours = 12;
        }
        output = new Array(hours).fill('Cuckoo').join(' ');
    }
    else {
        if (minutes % 3 === 0 && minutes % 5 === 0) {
            output = 'Fizz Buzz';
        }
        else if (minutes % 3 === 0) {
            output = 'Fizz';
        }
        else if (minutes % 5 === 0) {
            output = 'Buzz';
        }
        else {
            output = 'tick';
        }
    }

    return output;
}
