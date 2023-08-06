const perf = require('execution-time')();

function isPangram(str){
    let alphabet = {'a': false, 'b':false, 'c':false, 'd':false, 'e':false,
    'f':false, 'g':false, 'h':false, 'i':false, 'j':false,
    'k':false, 'l':false, 'm':false, 'n':false, 'o':false,
    'p':false, 'q':false, 'r':false, 's':false, 't':false,
    'u':false, 'v':false, 'w':false, 'x':false, 'y':false, 'z':false}
    str = str.toLowerCase()
    for (let char of str){
        if (char in alphabet){
            alphabet[char] = true
        }
    }
    if (Object.values(alphabet).includes(false)){
        return false
    }
    return true
}

perf.start();                     // Starts timer
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
let resultsisPangram = perf.stop(); 
console.log("IsPangram", resultsisPangram.preciseWords);

// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

//space complexity is constant or O(1) due to the only thing being stored is the str and the letters of the alphabet
// runtime 1.83ms