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
// 4. CONTROL FLOW
// --------------------------------------------
console.log("\n--- 4. CONTROL FLOW ---");

function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log("Grade for 92:", getGrade(92));
console.log("Grade for 75:", getGrade(75));
console.log("Grade for 55:", getGrade(55));

// FizzBuzz
console.log("\nFizzBuzz (1-20):");
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// --------------------------------------------
// 5. CALCULATOR MINI-PROJECT
// --------------------------------------------
console.log("\n--- 5. CALCULATOR ---");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 / 0 =", calculate(10, "/", 0));
console.log("10 % 3 =", calculate(10, "%", 3));
console.log("2 ** 8 =", calculate(2, "**", 8));

// --------------------------------------------
// 6. ARRAYS & OBJECTS - STUDENT GRADE TRACKER
// --------------------------------------------
console.log("\n--- 6. STUDENT GRADE TRACKER ---");

const students = [
    { name: "Carlos Adenge", age: 22, grade: 88, major: "Computer Programming" },
    { name: "Stacy Otieno", age: 21, grade: 92, major: "Computer Programming" },
    { name: "Belinda Omondi", age: 23, grade: 79, major: "Business" },
    { name: "Josphine Moraa", age: 20, grade: 95, major: "Computer Programming" },
    { name: "Brian Kamau", age: 24, grade: 67, major: "Math" }
];

// 1. All student names
const names = students.map(student => student.name);
console.log("All names:", names);

// 2. Students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High achievers:", highAchievers);

// 3. Find a specific student
const carlos = students.find(student => student.name === "Carlos Adenge");
console.log("Found Carlos:", carlos);

// 4. Average grade
const averageGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("Average grade:", averageGrade.toFixed(1));

// 5. Computer Programming majors only
const csStudents = students.filter(student => student.major === "Computer Programming");
console.log("CS Students:", csStudents);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by grade:", sortedByGrade);

// 7. Any student with grade > 90?
const hasTopStudent = students.some(student => student.grade > 90);
console.log("Has student above 90?", hasTopStudent);

// 8. Are all students passing (grade >= 60)?
const allPassing = students.every(student => student.grade >= 60);
console.log("All students passing?", allPassing);

console.log("\n===== END OF WEEK 4 PRACTICE =====");
