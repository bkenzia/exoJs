let sentence="je suis là"

const wordsTable = sentence.split(' ')
let largeWord=wordsTable[0];

for (let index = 0; index < wordsTable.length - 1; index++) {
    
    if((largeWord.length) < (wordsTable[index + 1].length)){
        largeWord = wordsTable[index +1]
    }
    
}
console.log("largeWord==",largeWord)