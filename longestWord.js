const perf = require('execution-time')();


function findLongestWord(arr){
    let longestLength = 0
    for (let word of arr){
        if (word.length > longestLength){
            longestLength = word.length
        }
    }
    return longestLength
}
perf.start();                     // Starts timer
console.log(findLongestWord(["hi", "hello"]));
let resultsLongestWord = perf.stop(); 
console.log("LongestWord", resultsLongestWord.preciseWords);
// -> 5




// space complexity is O(n) where n is the number of elements within the array given
//runtime 1.69ms