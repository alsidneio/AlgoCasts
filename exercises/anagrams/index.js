// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  
}

module.exports = anagrams;

//-------------------my personal  solution---------// 
// function anagrams(stringA, stringB) {
//     let newA = stringA.toLowerCase().replace(/[^\w]/g,'').split('').sort().join('')
//     let newB = stringB.toLowerCase().replace(/[^\w]/g,'').split('').sort().join('')

//     console.log(newA)
//     console.log(newB)
    
//     return newA===newB  
// }
//-------------------------End Persional solution-------------//

//------------------Video Solution 1 ----------------------//
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA)
//     const bCharMap = buildCharMap(stringB)

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false 
//     }

//     for(char in aCharMap){
//         if(aCharMap[char]!== bCharMap[char]){
//             return false
//         }
//     }

//     return true
// }


// const buildCharMap= (str) =>{
//     const charMap= {}

//     for (char of str.replace(/[^\w]/g,'').toLowerCase()){
//         charMap[char] = charMap[char]+1 || 1
//     }
//     return charMap;
// }
//--------------------------End Solution 1-----------------------------------//

//-----------Video Solution 2---------------------------//


//------------End Video Solution 2-------------------//