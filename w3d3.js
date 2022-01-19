// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

function isPallindrome(str) {
    for (var start = 0; start < (str.length/2); start++){
        var end = str.length -1 -start;
        if (str[start] !== str[end]){
            return false;
        }
    }
    return true
}

console.log(isPallindrome("racecar")); // true
console.log(isPallindrome("e tacocat e")); // true
console.log(isPallindrome("Dud")); // false
console.log(isPallindrome("oho!")); // false
console.log(isPallindrome(" to ")); // false

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"


// function longestPallindrome(str) {
//     for (var i = 0; i <str.length; i++){
        // 1. come from start and end
        // 2. we need to compare the start and end of each word 
        // if (str[i] = " "){
        //     for (var start = 0; start < i; i++){
        //         var end = i-start;
        //         if(str[start] != str[end]){
        //             console.log("no match");
        //         }
        //         else{
        //             for(var right = )
        //             let ary = [];
        //             ary.push
        //         }
        //     }
        //     return true;
        //     }
        // }
        // 3. we need to compare the length of the palindrome
//     }
// // }

// function longestPallindrome(str) {
//     for (var start = 0; start <(str.length/2); start++){
//         var end = str.length -1-start;
//         if (str[start] == str[end]){
//             let newString = [];
//             for (var word = start; word <= end; word++){
//                 newString.push(str[word]);
//             }
//             console.log(newString);
//         }
//     }
// }


function longestPallindrome(str) {
    var newString = "";

    for (var i = 0; i <str.length - 1; i++){
        for (var j = i +1; j<=str.length ; j++){
            var substring = "";
            for (k = i; k<j; k++){
                substring += str[k];
            }
            if (isPallindrome(substring) === true){
                if (substring.length > newString.length){
                    newString = substring;
                }
            }
        }
    }
    return ("the longest palindrome is: " + newString + " The length of it is: " + newString.length);
}

// function longestPallindrome(str){
//     var palli = "";

//     for (var i = 0; i< str.length -1; i++){
//         ///starts from index 0 and comparing other words
//         for (var j = i+1; j <= str.length; j ++){
//             //if didnt find move up start point by 1
//             if (isPallindrome(str.slice(i,j))=== true){
//                 ///is the new pllindrome's length greater than the existin g"longest palindrome?
//                 if (str.slice(i,j).length > palli.length){
//                     palli = str.slice(i.j);
//                 }
//             }
//         }
//     }

//     return palli;
//     // if its an empty space just order

// }

// function longestPallindrome(str){
//     for (var subLen = str.length; subLen > 0; subLen--){
//         for (var i = 0; i+subLen <= str.legnth; i++){
//             var substring = str.substring(i, subLen+1);
//             if (isPallindrome(substring)){
//                 return substring;
//             }
//         }
//     }
// }
console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));


