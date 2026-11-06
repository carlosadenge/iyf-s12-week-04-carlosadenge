// Day 5: Palindrome Checker

console.log("=== Day 5: Palindrome Checker ===");

function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Reverse the cleaned string
    const reversed = cleaned.split("").reverse().join("");
    
    return cleaned === reversed;
}

console.log(isPalindrome("racecar"));                      // true
console.log(isPalindrome("hello"));                        // false
console.log(isPalindrome("A man a plan a canal Panama"));  // true
console.log(isPalindrome("Carlos"));                       // false
console.log(isPalindrome("Level"));                        // true
