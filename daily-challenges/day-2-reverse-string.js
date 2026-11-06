// Day 2: Reverse a String

console.log("=== Day 2: Reverse a String ===");

// Method 1: Using built-in methods
function reverseString1(str) {
    return str.split("").reverse().join("");
}

// Method 2: Using a loop
function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Method 3: Using recursion
function reverseString3(str) {
    if (str === "") return "";
    return reverseString3(str.slice(1)) + str[0];
}

console.log(reverseString1("hello"));      // olleh
console.log(reverseString2("JavaScript")); // tpircSavaJ
console.log(reverseString3("Carlos"));     // solraC
