/*Problem 11: Find the Sum of an Array  [Easy]
Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
Example:
Input: [1, 2, 3, 4, 5]  → Output: 15
*/

function sumArray(arr) {
    let acc = arr.reduce((acc, curr) => {
        return acc + curr;
    });
    return acc;
}


console.log(sumArray([1, 2, 3, 4, 5]));



function sumArray1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray1([1, 2, 3, 4, 15]));