// var veggie1 = "zucchini";
// var veggie2 ="broccoli";

// veggie2 = veggie1;
// console.log("my fave veggie is"+ veggie1 + ", and my second is"+ veggie2);

//attempt2;
// var veggie1 = "zucchini";
// var veggie2 ="broccoli";

// var temp = veggie1;
// veggie1 = veggie2;
// veggie2 = temp;
// console.log("my fave veggie is"+ veggie1 + ", and my secong is"+ veggie2);

//while loop

// var start = 0;
// var end = 12;

// while(start<end){
//     console.log("start: " + start + ", end:"+ end); // infinite loop
//     start+=2;
//     end-=2;
// }

//reverse
//write a function that takes in an array then
//returns the reversed version of the same array
//no built in function
//psuedo code it out!

// start = end
// end= temp


function reverse(arr){
    var start = 0;
    var end = arr.length-1;
    
    while(start<end){
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++; 
        end--;
    }     
    return arr; //intending the values are swapped
}

console.log(reverse([1,2,3,4,5,6,7,8,9,10])); //parentheses
console.log(reverse([4,8,15,16,23,42]));

//loop through aray 
//ends when start = end
//compares first entry and last entry
//swap first and last entry
//increment by one
//decrease by one
