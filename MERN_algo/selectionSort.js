/* 
1) we move left to right on EACH pass, looking for the next largest values. 
2) For the biggest value, we name it biggest index, 
3) if we find somthing bigger, switch the value of bigindex
4), then switch the value of the biggest index to the final position. 
5) reoeat the pass until everything is sorted
*/
/*
function selectionSort(arr){
    //we start from index 0
    for(var i = 0; i < arr.length-1; i ++){
        let min = i;
        //give min pointer to the index not the value
        // let end = arr.length -1;
        //why does this not work?

        //!!! this for loop needs to repeat arr.length times! because we are not comparing indexes we are doing j amount of times
        //and j starts at 1
        for(var j = i+1; j < arr.length; j ++){
            if(arr[j] < arr[min]){//why??? why not arr[j]>arr[min]?
                console.log(min, j);
                min = j;
                console.log(min);
                //so min is now arr[i+1]
            }
        }
        //need to swap
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}this swaps the first instead of the end

*/

let myArray = [184, 749, 609, 541, 4, 353, 391, 452];
// console.log(selectionSort(myArray));

const selectionSort = (arr)=>{
    for(let i =0; i< arr.length; i++){
        let bigIndex = 0;//gna stay at the first index
        let end = arr.length -1-i;
        for(var j = 1; j <end; j++){//the indices descrease everytime. 
            if (arr[j]>arr[bigIndex]){
                bigIndex = j;
            }
        }
        console.log(end);
        [arr[bigIndex], arr[end]] = [arr[end], arr[bigIndex]];//destructure swap
    }
    return arr;
}


/*
const selectionSort = (arr) =>{
    for(let end =arr.length-1; end>=0; end--){
        let bigIndex = 0;
        for(var i =1; i<end; i++){
            if (arr[i]>arr[bigIndex]){
                bigIndex = i;
            }
        }
        console.log(end);
        [arr[bigIndex], arr[end]] = [arr[end], arr[bigIndex]];
    }
    return arr;
}
*/
console.log(selectionSort(myArray));