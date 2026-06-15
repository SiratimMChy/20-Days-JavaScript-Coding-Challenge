/*Problem 23: Create a Counter with Closure  [Medium]
Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
Example:
const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2
*/

function makeCounter() {
    let cnt = 0;

    return {
        increment() {
            cnt++;
        },

        decrement() {
            cnt--;
        },

        getCount() {
            return cnt;
        }
    };
}

const c = makeCounter();

c.increment();
c.increment();

console.log(c.getCount());
