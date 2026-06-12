// Problem 1: Swap Two Variables  [Easy]
//Write a function that swaps the values of two variables without using a third variable.

function SwapTwoVariables(a, b) {
    [a, b] = [b, a];
    console.log("After Swap: ", a, b);
}
SwapTwoVariables(5, 10);

function SwapTwoVariables1(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log("After Swap: ", a, b);
}
SwapTwoVariables1(5, 10);