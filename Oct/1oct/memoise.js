// memoise.js

// Memoization function
function memoize(fn) {
    const cache = {}; // Store computed results
    return function (n) {
        if (cache[n]) {
            console.log(cache, 'Cached value');
            return cache[n];
        } else {
            console.log('New input value');
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    };
}

// Recursive factorial function
const factorialFn = (num) => {
    console.log('Calculating factorial for:', num);
    return num <= 1 ? 1 : num * factorialFn(num - 1);
};

// Create memoized version
const factorial = memoize(factorialFn);

// Run memoization on button click
document.getElementById('runMemoize').addEventListener('click', () => {
    console.clear();
    console.log('--- Running Memoization Demo ---');
    console.log('factorial(5):', factorial(5)); // computes and stores
    console.log('factorial(5):', factorial(5)); // retrieves from cache
    console.log('factorial(10):', factorial(10)); // new input
});
