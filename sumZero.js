const perf = require('execution-time')();


function sumZero(array){
    array.sort()
// console.log(array)
    let low = 0;
    let high = array.length-1

    while (low < high){
        if (array[low]+array[high]=== 0){
            return true;
        }else if (array[low]+array[high]<0){
            low += 1
        } else if (array[low]+array[high]>0){
            high -= 1
        }
    }
    return false
}


perf.start();                     // Starts timer
console.log(sumZero([1, 2, 3, 4, 5, 5, -1]))
let resultsSumZero = perf.stop(); 
console.log("SumZero", resultsSumZero.preciseWords);

console.log(sumZero([]))
//runtime 1.88ms on average with a time complexity of O(n) n being the number of elements in the array
// Space complexity of O(n) n being the number of elements within the array