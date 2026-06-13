/*Problem 12: Find Maximum Value in Array  [Easy]
Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
Example:
Input: [3, 1, 7, 2, 9]  → Output: 9
*/

function findMax(arr) {

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
findMax([1, 2, 3, 24, 15]);



let arr1 = [5, 8, 9, 12, 25];

let max = arr1[0];

for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] > max) {

        max = arr1[i];

    }
}
console.log(max);