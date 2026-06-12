//Problem 3: Find the Largest of Three Numbers  [Easy]
//Write a function largest(a, b, c) that returns the largest of three numbers.

let a = 3, b = 7, c = 5;

if (a > b && a > c) {
    console.log("Largest Number:", a);

} else if (b > a && b > c) {
    console.log("Largest Number:", b);
}
else {
    console.log("Largest Number:", c);
}



function LargestNumber(a, b, c) {
    console.log("LargestNumber :", Math.max(a, b, c));
}

LargestNumber(3, 17, 5);
