//the task here here is to use merge-sort methodology to sort this big list of items 
//think of a recursive method to sort the list

let bigArray = [50, 25, 10, 75, 100, 5, 30, 80, 15, 70, 20,
     45, 60, 90, 35, 40, 55, 95, 65, 85, 1, 99, 42, 7, 62, 33,
      77, 3, 88, 58, 22, 17, 72, 53, 12, 47, 8, 68, 11, 37, 91, 
      2, 28, 6, 44, 78, 66, 38, 82, 13, 31, 16, 69, 21, 89, 51,
       96, 41, 9, 73, 57, 27, 4, 74, 63, 32, 59, 61, 24, 49, 34,
        14, 86, 19, 84, 56, 98, 36, 81, 29, 76, 23, 64, 48, 87, 67,
         54, 46, 83, 92, 43, 71, 94, 26, 52, 18];



function mergeSort(array){

    //this is the base case now 
    //meaning if the array is a one element its already  sorted
    if(array.length <= 1){
        return array
    }

    //lets divide the array into two halves so that we can sort them independently
    
    let middle = Math.floor(array.length/2);
    let leftHalf = array.slice(0,middle);
    let rightHalf = array.slice(middle);

    //lets recursively sort the two halves 
    let leftSorted = mergeSort(leftHalf);
    let rightSorted = mergeSort(rightHalf);

    return merge(leftSorted,rightSorted);

}

//lets call another function 
function merge(left,right){
    //declare an empty array to push the results
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //lets compare the rightHalf items and leftHalf items and check which is greater than than 
    //the other and combine them

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex ++;
        }else{
            result.push(right[rightIndex]);
            rightIndex ++;
        }
    }
    //add any other remaining element from the left and right array
    return result.concat(left.slice(leftIndex),right.slice(rightIndex));
}
console.log(mergeSort(bigArray));