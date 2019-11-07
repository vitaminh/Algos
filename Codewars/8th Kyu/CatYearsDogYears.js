var humanYearsCatYearsDogYears = function(humanYears) {
    return [humanYears, calculateCatYears(humanYears), calculateDogYears(humanYears)];
}

const calculateCatYears = (years) => {
    let result = 0;

    if (years > 0) {
        result += 15;
    }
    if (years > 1) {
        result += 9;
    }

    for (let i = 3; i <= years; i++) {
        result += 4;
    }

    return result;
}

const calculateDogYears = (years) => {
    let result = 0;

    if (years > 0) {
        result += 15;
    }
    if (years > 1) {
        result += 9;
    }

    for (let i = 3; i <= years; i++) {
        result += 5;
    }

    return result;
}
