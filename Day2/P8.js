//Problem 8: Check Palindrome  [Easy]
// Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
function isPalindrome(str) {
    let Palindrome = str.split('').reverse().join('');
    return Palindrome === str;
}
console.log(isPalindrome("hello"));


function isPalindrome1(str) {
    let reverse = '';
    for (i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse === str;
}
console.log(isPalindrome1('racecar'));
