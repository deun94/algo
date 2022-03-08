//insertion sort is where you compare the element to its left until it is at the right order
//we need to compare the element at index i to its left [i-1] 
//Then we swap the location until it reaches the right location (while loop)

function insertionSort(arr){
    //parenthesis not needed
    for(let i =1; i < arr.length-1; i++){
        //this is to iterate the full indexes of the array 
        let thisValue = arr[i];
        //because we are comparing the same value to different values, we need to store that data

        let j = i-1;
        //compare the one right before that index value

        //while the the one on the right(arr[i]) is smaller than the one on the left(arr[j])
        //we swap the value
        while(thisValue < arr[j] && j >= 0){
            
            //[arr[j], arr[i]] = [arr[i], arr[j]]; //-> this simply swaps and continues to swap
            arr[j+1] = arr[j];
            //we put the value of the one on the right as the left
            //but we can't use the i, because then arr[i] stays the same. we want the value to be changing
            //then we decrease the index number to compare to the value
            j--;
            // console.log(j, j+1);
            // console.log(arr);
        }
        arr[j+1] = thisValue;
        // console.log(arr[j+1]);
        //then we declare the value after the while loop
        //console.log(arr);
    }
    
    return arr;
}

function anotherInsertion(arr){
    for (let i = 1; i < arr.length-1; i ++){
        let current = arr[i];
        let j = i-1;

        while(j <= 0 && current < arr[j]){
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            j--;
            console.log(arr);
        }
    }
    return arr;
}

let randomArray = [45, 3, 5, 62, 2, 90];
console.log(insertionSort(randomArray));
console.log(anotherInsertion(randomArray));
