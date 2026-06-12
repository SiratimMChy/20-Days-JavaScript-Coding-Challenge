//Problem 10: Count Occurrences of a Character[Easy]
//Write a function countChar(str, char) that returns how many times a character appears in a string.


function countChar(str, char) {
    return str.split(char).length - 1;
}
console.log(countChar('banana', 'n'));


function countChar1(str, char) {
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countChar1('banana', 'a'));