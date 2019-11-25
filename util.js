// Return random integer between min and max
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

// Execute callback num times
function times(num, callback) {
    for (let i = 0; i < num; i++) {
        callback(i)
    }
}

module.exports = { random, times }
