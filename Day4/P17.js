/*
Problem 17: Merge Two Objects  [Easy]
Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
Example:
Input: {a:1}, {b:2}  → Output: {a:1, b:2}
Hint: Use the spread operator or Object.assign(). */


function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1 }, { b: 2 }));


function mergeObjects1(obj1, obj2, obj3) {
    return Object.assign({}, obj1, obj2, obj3);
}

console.log(mergeObjects1({ a: 1 }, { b: 2 }, { c: 3 }));
