// function doAThing(){
//     console.log("hey there, from the function!")
// }

//  doAThing() -> you need to call out the function in order for it to work it also can repeat!

// problem 1
// var x=5;
// function setX(newValue){
//     x=newValue;
// }

// console.log(x);
// setX(15);
// console.log(x);


// prints out 5 and 15

//problem 2

// var x=5;

// function addToX(amount){
//     return x+amount;// return will end the function
//     console.log("hey there!!"); // does not exist outside of the function!
// }

// console.log(x);
// var result= addToX(-10) // if the numbver is not here the function will not work
// console.log(result);
// console.log(x);


//problem 3 palindrome is 앞뒤가 똑같음 리효리 이런거

function isPal(arr){
    for (var left =0; left <arr.length/2; left++){ //decimal sometimes bounce check for even/odd entry
        var right = arr.length -1 -left; /// left starts at 0 and arr[0] is the 1st entry
        if(arr[left] !== arr[right]){
            return "Not a palindrome!";
        }
    }
    return "Palindrome!!!!";
}

var result1 = isPal(([1,1,3,3,1]));
console.log(result1);

var result2 = isPal(([3,2,1,1,2,3]));
console.log(result2);