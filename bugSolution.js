function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x === undefined) {
    return -1;
  } else if (Number.isNaN(x)){
    return -2; //Explicitly handle NaN
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1
console.log(foo(5)); // Output: 6
console.log(foo(NaN)); // Output: -2