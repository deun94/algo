// #1) Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    //loop through input string to access each letter
    var newArr = [];
    for(let i=0; i<str.length; i++){
        newArr.unshift(str[i]);
    }

    for( let i = str.length -1 ; i>=0; i --){
        newArr.push(str[i]);
    }
    // console.log(newArr);
    //construct final string with reversed letters
    return newArr.join("");
}

console.log(reverseString("creature")); // "erutaerc"

// #2) Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

function acronym(str) {
    // your code here
    var word = str.split(" ");
    
    console.log(word);
    var acr = "";
    
    for(i=0; i<word.legnth; i++){
        var i = 0;
        acr += word[i][0].toUppercase;
    }
    return acr;
}

console.log(acronym("there's no free lunch - gotta pay yer way"));