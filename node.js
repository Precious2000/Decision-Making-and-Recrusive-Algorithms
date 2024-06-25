//Write a recursive function to calculate the result of raising a number to a given power.//
function power(base, exponent) {
    // Base case: any number to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }
    // If the exponent is negative, handle it by converting to positive
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    // Recursive case: multiply base by the result of raising base to the power of (exponent - 1)
    return base * power(base, exponent - 1);
}


console.log(power(2, 4));  // Output: 8
console.log(power(5, 5));  // Output: 1
console.log(power(2, -1)); // Output: 0.25
