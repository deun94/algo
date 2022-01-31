//Recursion a function calls itself within it self.


// wirte a recursive function that, given a number, returns the sum of integers from one up to that given number

function sigma(num){
    var sum = 0
    for (i = 0; i <= num; i++){
        sum += i
    }
    return sum
}

function recursiveSigma(num){
    if (num <=1){
        return 1
    }
    return num + recursiveSigma(num-1)
}
//important part is to get the end point 
//calling on the function within its self.

console.log(recursiveSigma(5))


//write a drecursive function that, given a num, returns the product of integers up to a given num
//ex/ given 4 would return 1* 2* 3*4  ==24

function recursiveFactorial(num){
    if(num <=1){
        return 1
    }
    return num * recursiveFactorial(num-1)
    //this part repeats until we hit the endpoint which is defined at line 30
}

// console.log(recursiveFactorial(4))
// console.log(recursiveFactorial(5))

//given a number add the collective sum up to that number (using Fibonacci sequence)
//F0 F1 F2  F3  F4     F5      F6   F7   F8
//0 1   1    2    3    5        8    13   21

// function recursiveFibonacci(num){
//     if(num <=0){
//         return 0
//     }
//     return (num) + recursiveFibonacci(num-1)
// }

function Fibonacci(num){
    var i = 0
    var j = 1
    var fib = 0
    for (var k= 1; k <= num; k ++){
        fib = i + j
        i = j
        j = fib
    }
    console.log(fib)
    return fib
}

function recursiveFibonacci(num){
    if(num == 0){
        return 0
    }
    //need this to check for the 0
    else if (num <= 2){
        // not one because that skips the step
        // if the number is two, we want (2-1) + (2-2)= 1
        //if the number is one, we get (1)
        // if the end point was one, it wold have been 
        // (2-1) + 1  = 2. we gotta take into account it's recursive

        return 1
    }
    return recursiveFibonacci(num-1) + recursiveFibonacci(num-2)
    // always adds the the 2nd to last and third to last becuase the fibonacci sums of those two is what we want for the sum
}
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(2))
console.log(recursiveFibonacci(3))
console.log(recursiveFibonacci(4))
console.log(recursiveFibonacci(5))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(7))
console.log(recursiveFibonacci(10))
console.log(recursiveFibonacci(0))