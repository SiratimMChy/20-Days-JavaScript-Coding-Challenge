//Problem 5: Check Positive, Negative or Zero  [Easy]
//Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.

function checkSign(n) {
    if (n > 0) {
        console.log("positive");
    }
    else if (n < 0) {
        console.log("Negative");
    }
    else {
        console.log("Zero");

    }
}

checkSign(-5);