// Day 3: Find Largest Number

console.log("=== Day 3: Find Largest Number ===");

// Method 1: Using a loop (do NOT use Math.max)
function findLargestLoop(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Method 2: Using reduce
function findLargestReduce(arr) {
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, arr[0]);
}

const numbers = [12, 45, 7, 89, 23, 56, 3];

console.log("Largest (loop):", findLargestLoop(numbers));     // 89
console.log("Largest (reduce):", findLargestReduce(numbers)); // 89
