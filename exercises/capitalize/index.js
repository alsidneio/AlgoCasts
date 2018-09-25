// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words= []

    for (word of str.split(' ')){
        words.push(word[0].toUpperCase()+word.slice(1))
    }
    return words.join(" ")
}

module.exports = capitalize;

//--------------------------My Solution--------------------------//
// function capitalize(str) {
//     let capString = [] 
//     let strArr= str.split(" ")
//     for(word of strArr){
//         capString.push(word.charAt(0).toUpperCase()+word.slice(1))
//     }
//     return capString.join(" ")
// }
//----------------------My solution End---------------------

//-----------------------visdeo solution 1---------------------------------//
// Thwe trick here to undserstand is that you can transform the object before the loop begins, then you will have les code 
// function capitalize(str) {
//     const words= []

//     for (word of str.split(' ')){
//         words.push(word[0].toUpperCase()+word.slice(1))
//     }
//     return words.join(" ")
// }
//--------------------END video solution 1----//