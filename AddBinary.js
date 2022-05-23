var addBinary = function(a, b) {
    let sum = 0
    sum = parseInt(a, 2) + parseInt(b, 2)
    return sum.toString(2)
};

console.log(addBinary(11, 1));