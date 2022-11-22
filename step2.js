//One//


const addToZero = (array) => {
let value = false;
for (let i= 0; i < array.length; i++){
    for (let j= 0; j<array.length; j++){
        if (i!== j){
        if (array[i] + array[j] === 0){
            value = true
        }
        }
}}

console.log(value)};

addToZero([1, 2, 3, -2]);

//Run Time = 0(n^2)//


//______________________________________________________________//

//Two//

const hasUniqueChars= (string) => {
    let uniqueChars = new Set([])
    for (let i=0; i < string.length; i++){
(uniqueChars.add(string[i]))
}
return uniqueChars.size === string.length }

console.log(hasUniqueChars("Monday"));

//Run Time = 0(n) //


//______________________________________________________________//

//Three//

let allLetters = "abcdefghijklmonpqrstuvwxyz".split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return allLetters.every(x => string.includes(x));
    
    }

console.log(isPangram("The quick brown fox jumps over the lazy dog"))

//Run Time = 0(n)//


//______________________________________________________________//

//Four//

const findLongestWord = (arr) => {
    let word = "";
    for (let i=0; i < arr.length; i++){
        if (word.length < arr[i].length){
            word = arr[i]
        }
    }
    console.log (word.length)

}

console.log(findLongestWord(["theactuallongestword","hi", "hello", "reallylongword"]));

//Run Time = 0(n)//