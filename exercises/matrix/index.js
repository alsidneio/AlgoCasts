// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// the trick to this is to use a while loop with 
//&& defined start and end columns when those endpoints 
//pass eachouther you know you have hit all indices

function matrix(n) {
    const results = []
    for(i=0; i<n; i++){
        results.push([])
    }
    let counter =1
    let startCol= 0
    let endCol= n-1
    let startRow= 0
    let endRow=n-1

    while(startCol<=endCol && startRow<=endRow){
        //top Row 
        for( i=startCol; i<=endCol; i++){
            results[startRow][i]= counter++
        }
        startRow++ 

        //right coulumn
        for (i= startRow; i<= endRow; i++){
            results[i][endCol] =counter++
        }
        endCol--

        // Bottom row
        for(i= endCol; i>=startCol;i--){
            results[endRow][i]=counter++
        }
        endRow--

        //left column
        for(i=endRow; i>=startRow; i--){
            results[i][startCol]=counter++
        }
        startCol++
    }
    console.log(results)
    return results

}

module.exports = matrix;

//-----------My partial solution: cons 
// function matrix(n) {
//     let holder = []
//     let counter = 1
//     let i=0
//     while(i<n){
//       holder.push(createRow(n))
//       i++
//     }
    
//     //top row
//     for(i=0; i<=n-1;i++){
//         holder[0][i]= counter++

//     }

//     //left column
//     for (i=1;i<=n-1;i++){
//         holder[i][n-1]=counter++
//     }

//     //bottom row
//     for(i=n-2; i>=0;i--){
//         holder[n-1][i]=counter++
//     }


//     console.log(holder)

// }

// //Helper functions 
// let createRow = (num)=>{
//    return Array(num).fill(0)
// }
