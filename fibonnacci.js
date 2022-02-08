//dynamic programing --> increase the number of calculations by eliminating repeated calculations

/**
 * @param {number} n
 * @return {number}
 */
function fibonacci(n){
  let cache = {};
  
  return function fib(n) {
    if (cache.hasOwnProperty(n)) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}
