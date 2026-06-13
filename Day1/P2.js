//Problem 2: Check Even or Odd  [Easy]
//Write a function isEven(n) that returns true if a number is even, and false if it is odd.

function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(7));


function EvenOdd(num) {
    if (num % 2 == 0) {
        console.log("Even");

    } else {
        console.log("Odd");

    }
}

EvenOdd(7);

/*
let num = 4;

if (num % 2 == 1) {
    console.log("Odd");
} else {
    console.log("Even");
}
*/
