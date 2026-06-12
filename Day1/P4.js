/*Problem 4: Celsius to Fahrenheit  [Easy]
Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
Example:
Input: 0   → Output: 32 Input: 100 → Output: 212
Hint: Formula: (C × 9/5) + 32*/


function CelsiusToFahrenheit(C) {
    let Fahrenheit = (C * 9 / 5) + 32;
    return Fahrenheit;
}

console.log(CelsiusToFahrenheit(0));


let C = 100;

let Fahrenheit = (C * 9 / 5) + 32;

console.log(Fahrenheit);
