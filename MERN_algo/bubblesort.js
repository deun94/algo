// //bubble sorts
// function bubbleSort(arr){
//     for(var i = 0; i< arr.length ; i++){//one more for loop to iterate through the array to make sure.
//         for(var j = 0; j < (arr.length-1) ; j++){//you need to check for arr.length -1 because you are checking for j + 1 index.
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

function bubbleSort(arr){
    for(let i = 0; i<arr.length; i ++){
        for(let j = 0; j<(arr.length -1); j++){
            if (arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];//this is swap
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,23,0,12,8,6])); // [0,5,6,8,12,23]
console.log(bubbleSort([0, 56, 23, 5, 1]));
