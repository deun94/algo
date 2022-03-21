//split the arrays as evenly as possible
//when the array length is one, you can't split it
//select the minimum of the two entries of the arraya
//sort and merge

//create a helper function that takes 2 already sorted array and combines them into one sorted array and returns that new sorted array
let test1 = [2,5,5]
let test2 = [1,3]
const combingSortedArray = (arr1, arr2) => {
    //result array ===================================================================
    let result = [];
    let [i, j] = [0,0];
    while(i< arr1.length && j <arr2.length){
        if (arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++;
            console.log(result, i, j)
        }else{
            result.push(arr2[j]);
            j++;
            console.log(result, i, j);
        }
    }
    //we want to check if all values are all iterated====================================

    while(i < arr1.length ){
        result.push[arr1[i]];
        i++;
    }
    while(j < arr2.length){
        result.push[arr2[j]];
        j++;
    }
    return result;
}

console.log(combingSortedArray(test1, test2));

// const mergeSort = (arr) =>{
    // let num = Math.sqrt(arr.length);
    // if(num % 2 !=0){
    //     num = Math.floor(Math.sqrt(arr.length));
    // }
    // for(i=0; i<= num; i ++){

    // }

// }

// const mergeSort= (arr) => {
//     let half = Math.ceil(arr.length/2);
//     if(arr.length < 2){
//     return arr;
// }
//     let leftHalf = arr.slice(0, half-1);
//     let rightHalf = arr.slice(half, arr.length-1);
// }

// let testArr = [34,5,12,0,3,4,1,2,3];//012345678 -> 5 
// mergeSort(testArr);
// ===========================================================solution
// const merge = (arr1, arr2) => {
//     let merged = [];
//     let [x, y] = [0, 0];
//     for (let i = 0; i < (arr1.length + arr2.length); i++) {
//         if (y >= arr2.length || arr1[x] < arr2[y]) {
//             merged.push(arr1[x]);
//             x++;
//         } else {
//             merged.push(arr2[y]);
//             y++;
//         }
//     }
//     return merged;
// }

// const mergeSort = (arr) => {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);
//     let leftSorted = mergeSort(arr.slice(0, mid));
//     let rightSorted = mergeSort(arr.slice(mid));
//     return merge(rightSorted, leftSorted);
// }

//===================================arr.splice()
//arr.splice lets you create a new sub array ffrom the original array (one value is one to all the way to the end)
//arr.slice does the same thing but gives you copy