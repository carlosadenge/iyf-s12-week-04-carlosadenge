// Day 4: Remove Duplicates

console.log("=== Day 4: Remove Duplicates ===");

// Method 1: Using Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

// Method 2: Using filter
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}


const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 3];

console.log("Set method:", removeDuplicatesSet(numbers));
console.log("Filter method:", removeDuplicatesFilter(numbers));

