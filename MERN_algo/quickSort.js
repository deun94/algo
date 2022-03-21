//Hoare's partitioning algorithm
/*
    1) choose a random pivot value
    2) initialize two pointers to the left most and right most
    3) iterate i through pivot and stop if you encounter a value bigger than pivot
    4) Then, iterate j to the left until we find sth that is not greater than the pivot
    5) swap values at i and j
    4) repeat
    5) break when i = j
    6) return j to know the pivot
*/
function partition(arr1, arr2){
    let [i,j] = [0, arr1.length-1]

    for (let i = 0; i < arr1.length; i ++){
        if(j>0||arr1[i] > arr2[0]){
            
        }
    }
    return (console.log(partedLeft, partedRight));

}

partition([5,2,4,6,10,6,4,3,6])

function quickSort(arr){
    let x = Math.floor(Math.random()*arr.length);
    // console.log(x)
    let endIndex = arr.length-1;
    console.log(x, endIndex);
    //=====checking to see random number is not the endIndex
    x != endIndex ?
    [arr[x], arr[endIndex], x, endIndex] = [arr[endIndex], arr[x], endIndex, x]
    : x=x;

    let partedLeft = arr.slice(0, x);
    let partedRight = arr.slice(x);

    return partition(quickSort(partedLeft), quickSort(partedRight));
}