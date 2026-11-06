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
