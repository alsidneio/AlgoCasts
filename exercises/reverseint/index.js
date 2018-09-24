// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let sign = Math.sign(n)
    let arr=n.toString().split('')
    if (sign==-1){
        arr.shift()
    } 
    return sign*parseInt(arr.reverse().join(''))
   

}

module.exports = reverseInt;
