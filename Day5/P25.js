function memoize(fn) {
    let cache = {};

    return function (n) {
        if (n in cache) {
            console.log("From cache");
            return cache[n];
        }

        console.log("Computed");
        let result = fn(n);
        cache[n] = result;
        return result;
    };
}


const memoAdd = memoize(n => n + 10);

console.log(memoAdd(5));
console.log(memoAdd(5)); 
console.log(memoAdd(7));
console.log(memoAdd(7)); 