//Problem 6: Reverse a String  [Easy]
//Description: Write a function reverseString(str) that returns the reverse of a given string.


function reverseString(str) {
    let reverseStr = str.split('').reverse().join('');
    return reverseStr;
}

console.log(reverseString("World"));


function reverseString1(str) {
    let reverseStr = "";
    for (i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseString1("Hello"));
