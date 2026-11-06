// Day 4: Remove Duplicates

console.log("=== Day 4: Remove Duplicates ===");

// Method 1: Using Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

console.log("Set method:", removeDuplicatesSet(numbers));
