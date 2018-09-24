// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//ask if case matters , if not convert to inout to lower case 
function maxChar(str) {
     let charMap={}
     let max =0
     let maxChar=''

     for(letter of str){
         if(charMap.hasOwnProperty(letter)){
             charMap[letter]++
         }else{
             charMap[letter]=1
         }
     }

     for(prop in charMap){
         if(charMap[prop]>max){
             max =charMap[prop]
             maxChar=prop
         }
     }

     return maxChar
}

module.exports = maxChar;
