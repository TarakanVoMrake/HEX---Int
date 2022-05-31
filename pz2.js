const bigInt = require("big-integer");
const prompt = require('prompt-sync')({sigint: true});

let HEX2BE = (data) => {
    return bigInt(data, 16).value.toString()
}

let HEX2LE = (data) => {
    return HEX2BE(changeDirection(data)).toString()
}

let BE2HEX = (data) => {
    return bigInt(data).toString(16)
}

let LE2HEX = (data) => {
    return changeDirection(BE2HEX(data))
}

let changeDirection = (data) => {
    let ans = ""
    data = data.length % 2 === 0 ? data : '0' + data
    while (data.length > 0) {
        ans += data.slice(-2)
        data = data.slice(0, -2)
    }
    return ans
}

let hex = prompt("What is the value of the vector? ")
console.log("HEX to Little Endian: " + HEX2LE(hex))
console.log("HEX to Big Endian: " + HEX2BE(hex))

let le = prompt("What is the value of the little-endian? ")
console.log("Little Endian to HEX: " + LE2HEX(le))

let be = prompt("What is the value of the big-endian? ")
console.log("Big Endian to HEX: " + BE2HEX(be))
