/*Problem 14: Flatten a Nested Array  [Medium]
Description: Write a function flattenArray(arr) that flattens one level of a nested array.
Example:
Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
*/

function flattenArray(arr){
    return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, 5]] ));


/*
function flattenArray1(arr){
    let result = arr.reduce((acc,curr)=>{
          return acc.concat(curr);
    },[]);

    return result;
}

console.log(flattenArray1([1, [2, 3], [4, 5]] ));


*/