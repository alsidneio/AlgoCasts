// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed,char)=>{
        return char+ reversed
    },"")
}

module.exports = reverse;

// function reverse(str) {
//     let strArr = str.split('')
//     let idx= strArr.length-1 
//     for(i=0; i<Math.ceil    (strArr.length/2);i++){
//         let saved = strArr[idx-i]
//         strArr[idx-i] =strArr[i]
//         strArr[i]=saved
//     } 
    
//     let newString = strArr.join('')
//     return newString

// }

// function reverse(str) {
//     return str.split('').reverse().join('')
//  }