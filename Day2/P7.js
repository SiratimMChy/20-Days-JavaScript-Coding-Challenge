//Problem 7: Count Vowels in a String  [Easy]
//Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
function countVowels(str) {
    let count = 0;
    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count ++;
        }
    }
    return count;
}

console.log(countVowels("JavaScript"));
