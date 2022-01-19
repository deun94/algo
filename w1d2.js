//problem 1
var a = 25;
a = a - 13;
console.log(a/2); //6 - js is by order

a = "hello"
console.log(a + "hello");//hello hello
//6 hello hello
//problem 2
for(var i=0; i <10; i++){
    console.log(i);
    i = i+3;
    //i++
}

console.log("outside of the loop" + i);

//problem 3
function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];//counting 1 twice //i= or sum=0
    for(var i=0; i<arrayOfNumbers.length; i++){
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }
    console.log("the total is: " + sum);
}

getTotal([1,3,5]);

