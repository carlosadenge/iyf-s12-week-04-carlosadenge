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

// Method 3: Using a loop
function removeDuplicatesLoop(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}


const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 3];

console.log("Set method:", removeDuplicatesSet(numbers));
console.log("Filter method:", removeDuplicatesFilter(numbers));
console.log("Loop method:", removeDuplicatesLoop(numbers));

