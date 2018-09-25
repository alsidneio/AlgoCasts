// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let i=1
    
     while(i<=n){
         let base = (2*n)-1 
         let bricks = (2*i)-1
         let air =(base-bricks)/2
         console.log(' '.repeat(air)+ '#'.repeat(bricks)+' '.repeat(air))
         i++
     }
}

pyramid(4)

module.exports = pyramid;
