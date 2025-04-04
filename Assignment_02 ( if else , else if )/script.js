// Question 33  /  Number Finder

// var userInput = parseInt(prompt ("Enter a Number"));
// if (userInput > 0) {
//     console.log('Your Number is Positive');
// } else if (userInput < 0) {
//     console.log('Your Number is Negative');
// } else {
//     console.log('Your Number is Zero');
// };

// Question 34  /  Even Odd Finder

// var y = prompt("Enter a number here");
// if (y % 2 === 0) {
//     console.log("Even Number");
// } else {
//     console.log("Odd Number");
// };

// Question 35  /  Eligible for Vote or Not ?

// var age = prompt ("Enter Your Age");
// if (age >= 18 ) {
//     console.log ("You Are Eligible for Vote");
// } else {
//     console.log ("You Are not Eligible for Vote");
// };

// Question 36  /  Biggest unit Number Finder

// var large1 = 9;
// var large2 = 99;
// var large3 = 999;
// var large4 = 9999;
// var large5 = 99999;
// var userInput = prompt("enter a number upto 1 lakh to find the biggest number");
// if (userInput.trim().length === 1) {
//     console.log("biggest number in one digit", large1);
// } else if (userInput.trim().length === 2) {
//     console.log("biggest number in two digit", large2);
// } else if (userInput.trim().length === 3) {
//     console.log("biggest number in three digit", large3)
// } else if (userInput.trim().length === 4) {
//     console.log("biggest number in four digit", large4);
// } else if (userInput.trim().length === 5) {
//     console.log("biggest number in five digit", large5);
// } else {
//     console.log("inifinity");
// }

// Question 37   /  Eligibility Criteria for Membership

// var userAge = prompt("Enter your age");
// var isMembership = prompt("Do you have membership");
// if (userAge >= 60 || isMembership.toLowerCase() === "yes") {
//     console.log("You are Eligible for discount");
// } else {
//     console.log("You are not Eligible for discount");
// }

// Question 38  /  Email & Password Detecter

// var name = prompt("Enter username");
// var password = prompt("Enter password");
// var userName = "admin";
// var userPassword = 12345;
// if (name.toLowerCase() === userName && password == userPassword) {
//     console.log("Login Successfull");
// } else {
//     console.log("Invalid email or password");
// }

// Question 39  /  Grade Calculator

// var first = "A+";
// var second = "A";
// var third = "B";
// var fourth = "C";
// var fifth = "D";
// var marks = prompt("Enter your marks for your Grade");
// if (marks >= 90 && marks <= 100) {
//     console.log("Your grade is", first);
// } else if (marks >= 80 && marks <= 89) {
//     console.log("Your grade is", second);
// } else if (marks >= 70 && marks <= 79) {
//     console.log("Your grade is", third);
// } else if (marks >= 60 && marks <= 69) {
//     console.log("Your grade is", fourth)
// } else if (marks >= 50 && marks <= 59) {
//     console.log("Your grade is", fifth);
// } else if (marks < 50 && marks >= 0) {
//     console.log("You are Fail");
// } else {
//     console.log("Error");
// };

// Question 40  /  Traffic Signal Detector

// var userInput = prompt("You can enter the following colors for output \n1) red 2) green 3) yellow");
// if (userInput.toLowerCase() === "red") {
//     console.log("Stop");
// } else if (userInput.toLowerCase() === "yellow") {
//     console.log("Slow Down");
// } else if (userInput.toLowerCase() === "green") {
//     console.log("Go");
// } else {
//     console.warn("Enter the following colors");
// }

// Question 41  /  Eligibility Criteria for Tickets Distribution

// var userAge = prompt("Enter your Age");
// if (userAge < 12) {
//     console.log("You are Eligible for Child Ticket.");
//     window.alert("You are Eligible for Child Ticket.");
// } else if (userAge < 17 && userAge > 11) {
//     console.log("You are eligible for a Teen Ticket.");
//     window.alert("You are eligible for a Teen Ticket.");
// } else if (userAge > 17 && userAge < 65) {
//     console.log("You are eligible for an Adult Ticket.");
//     window.alert("You are eligible for an Adult Ticket.");
// } else if (userAge > 64) {
//     console.log("You are eligible for a Senior Ticket.");
//     window.alert("You are eligible for a Senior Ticket.");
// } else {
//     console.error ("Enter only Numeric value");
// }