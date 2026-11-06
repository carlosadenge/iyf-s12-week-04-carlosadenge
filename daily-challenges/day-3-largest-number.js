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

