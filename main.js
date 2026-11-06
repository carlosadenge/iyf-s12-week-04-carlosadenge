// ============================================
// WEEK 4 - JAVASCRIPT FUNDAMENTALS
// Student: Carlos Adenge
// ============================================

console.log("===== WEEK 4 JS FUNDAMENTALS =====");
console.log("Student: Carlos Adenge\n");

// --------------------------------------------
// 1. VARIABLES PRACTICE
// --------------------------------------------
console.log("--- 1. VARIABLES ---");

let fullName = "Carlos Adenge";
let age = 22;
let isStudent = true;
let favoriteColors = ["blue", "black", "green"];
let today = new Date();

console.log("My name is:", fullName);
console.log("My age is:", age);
console.log("Am I a student?", isStudent);
console.log("My favorite colors:", favoriteColors);
console.log("Today's date:", today.toDateString());
console.log("Type of fullName:", typeof fullName);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);

// --------------------------------------------
// 2. DATA TYPES & OPERATORS
// --------------------------------------------
console.log("\n--- 2. OPERATORS ---");

let a = 15;
let b = 4;

console.log("15 + 4 =", a + b);
console.log("15 - 4 =", a - b);
console.log("15 * 4 =", a * b);
console.log("15 / 4 =", a / b);
console.log("15 % 4 =", a % b);
console.log("15 ** 2 =", a ** 2);

// Age calculations
let ageInDays = age * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = 2026 + (100 - age);

console.log(`I am approximately ${ageInDays} days old`);
console.log(`I am approximately ${ageInHours} hours old`);
console.log(`I will turn 100 in the year ${yearTurn100}`);

// --------------------------------------------
// 3. FUNCTIONS
// --------------------------------------------
console.log("\n--- 3. FUNCTIONS ---");

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(name) {
    return name
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log("Area of 10x5:", calculateArea(10, 5));
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is 8 even?", isEven(8));
console.log("Initials of Carlos Adenge:", getInitials("Carlos Adenge"));
console.log("Reverse of 'JavaScript':", reverseString("JavaScript"));
console.log("Tip on 2000 at 15%:", calculateTip(2000));
console.log("Tip on 2000 at 20%:", calculateTip(2000, 20));

// --------------------------------------------
