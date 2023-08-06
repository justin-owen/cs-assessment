const perf = require('execution-time')();




function hasUniqueChars(str){
    let chars = {}
    for (char of str){
        if ((char in chars)=== false){
            chars[char] = true
        }else{
            return false
        }
    }
    return true
}
perf.start();                     // Starts timer
console.log(hasUniqueChars('watrmelon'))
let resultsUniqueChars = perf.stop(); 
console.log("UniqueChars", resultsUniqueChars.preciseWords);
console.log(hasUniqueChars('watermelon'))

// space complexity is O(n) where n is each char within the string
//runtime 1.5ms