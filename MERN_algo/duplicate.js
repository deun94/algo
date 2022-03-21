function intersect(arr1, arr2){
    let finalArr = [];
    let [i,j] = [0,0];
    for (i= 0; i <arr1.length-1 ; i++){
        if(arr1[i] == arr2[j]){
            console.log(arr1[i], arr2[j]);
            finalArr.push(arr1[i]);
            j++;
            console.log(finalArr)
        }
        //this algo immediately stops itself when it finds a match
        //we need to figure out a way to go over that and find another match


        // else if (i = arr2.length -1){
        //     j++;
        // }
    }
    return finalArr;
}

// let arrayOne = [1, 2, 3, 4, 5];
// let arrayTwo = [2,4];

let one = [2, 4, 7, 9, 10];
let two = [2, 3, 5, 7, 9, 10];

console.log(intersect(one, two));


/*
const intersect = (arr1, arr2) = > {
    const result = [];
    let [x, y] = [0,0];
    while( x < arr1.lenth && y<arr2.length){
        if (arr1[x]<arr2[y]) x++;
        if(arr1[x]> arr2[y]) y ++;
        if(arr1{x] ===arr2[y]){
            {result[result.lenth] = arr1[x], x,y++}
        }
    return result;
}
*/
