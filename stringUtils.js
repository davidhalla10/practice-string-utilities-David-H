function capitilize(str) {
    if (!str) {
        return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);

}

function reverse(str) {
    return str.split("").reverse().join("");
}

function contains(str, substr) {
    return str.includes(substr);
}

module.exports = { capitilize, reverse, contains }
