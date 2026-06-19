/*
Problem 25: Memoize a Function  [Medium]
Write function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
Example:
const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
Hint: Use an object as a cache inside the outer function.
*/

function memoize(fn) {
    let cache = {};
    return function (n) {
        if (cache[n]) {
            console.log("From Cache");
            return cache[n];
        }
        else {
            console.log("Computed");
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    }

}

const memoAdd = memoize(n => n + 10);


console.log(memoAdd(5));
console.log(memoAdd(5));
console.log(memoAdd(5));