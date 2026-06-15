/*
Problem 21: Factorial (Recursive)  [Easy]
Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
Example:
Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
*/

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));//120


function factorial1(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log(factorial1(5)); // 120