String.prototype.toAlternatingCase = function () {
    let result = "";

    for (let i = 0; i < this.length; i++) {
        if (!isNaN(this[i])) {
            result += this[i];
        } else if (this[i] === this[i].toLowerCase()) {
            result += this[i].toUpperCase();
        } else {
            result += this[i].toLowerCase();
        }
    }

    return result;
}
