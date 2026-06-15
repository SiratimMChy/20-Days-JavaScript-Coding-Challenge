
 /*
Problem 22: Fibonacci Sequence  [Easy]
Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
Example:
Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
*/
 

function fibonacci(n) {
    let a = 0;
    let b = 1;

    if (n === 0) return 0;
    if (n === 1) return 1;

    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fibonacci(6));

function fibonacci1(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci1(n - 1) + fibonacci1(n - 2);
}

console.log(fibonacci1(6));

// 0 1 1 2 3 5 8 13 21

/*
a = 0
b= 1
c = a+b = 0+1=1
c= 1+1 =2 // a = b =1, b = c = 1
c = 1+2 =3 // a = b = 1 , b=c=2
c = 2+3 =5 // a = b= 2, b = c =3
c = 3+ 5 =8
*/
