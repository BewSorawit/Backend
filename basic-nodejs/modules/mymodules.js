const getCurrentTime = () => {
    return new Date();
}

const add = (...array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

module.exports.getCurrentTime = getCurrentTime;
module.exports.add = add;