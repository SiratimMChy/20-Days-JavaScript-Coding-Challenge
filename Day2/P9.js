 
//Problem 9: Capitalize First Letter of Each Word  [Easy]
//Write a function titleCase(str) that capitalizes the first letter of every word in a string.

function titleCase(str){
    return str.split(' ').map(word=> word[0].toUpperCase()+word.slice(1)).join(' ');
}

console.log(titleCase("hello world"));


function titleCase1(str) {
    let words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
       let word = words[i];
       result.push(word[0].toUpperCase() + word.slice(1));
    }

    return result.join(" ");
}

console.log(titleCase1("hello world"));