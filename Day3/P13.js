/*Problem 13: Remove Duplicates from Array  [Easy]
Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
Example:
Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
*/

 function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
 }
 console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));