// Question 1

// var x = prompt ("Enter a Number");

// if (x < 0) {
//     console.log ("This is a Negative Number" , x);
// } else if (x > 0) {
//     console.log ("This is a Positive Number" , x);
// } else if (x == 0) {
//     console.log ("This is a Zero Number" , x); 
// }

// Question 2

// var y = prompt("Enter a number here");

// if (y % 2 == 0) {
//     console.log("Even Number");
// } else {
//     console.log("Odd Number");
// }

// Question 3

// var age = prompt ("Enter Your Age");

// if (age >= 18 ) {
//     console.log ("You Are Eligible");
// } else {
//     console.log ("You Are not Eligible");
// }

// Question 4

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

// Question 5

// var discount = prompt("Enter your age");
// var membership = prompt("Do you have membership");

// if (discount >= 60 || membership.toLowerCase() === "yes") {
//     console.log("You are Eligible for discount");
// } else {
//     console.log("You are not Eligible for discount");
// }

// Question 6

// var name = prompt("Enter username");
// var password = prompt("Enter password");
// var userName = "admin";
// var userPassword = 12345;

// if (name.toLowerCase() === userName && password == userPassword) {
//     console.log("Login Successfull");
// } else {
//     console.log("Invalid email or password");
// }

// Question 7

// var first = "A+";
// var second = "A";
// var third = "B";
// var fourth = "C";
// var fifth = "D";
// var last = "F"
// var marks = prompt("Enter your marks for your Grade");

// if (marks >= 90 && marks <= 100) {
//     console.log("Your grade is", first);
// } else if (marks >= 80 && marks <= 100) {
//     console.log("Your grade is", second);
// } else if (marks >= 70 && marks <= 100) {
//     console.log("Your grade is", third);
// } else if (marks >= 60 && marks <= 100) {
//     console.log("Your grade is", fourth)
// } else if (marks >= 50 && marks <= 100) {
//     console.log("Your grade is", fifth);
// } else if (marks < 50 && marks <= 100) {
//     console.log("Your grade is", last);
// } else {
//     console.log("Error");
// }

// Question 8

// var trafficLight = prompt("You can enter the following colors for output \n1) red 2) green 3) yellow");

// if (trafficLight.toLowerCase() === "red") {
//     console.log("Stop");
// } else if (trafficLight.toLowerCase() === "yellow") {
//     console.log("Slow Down");
// } else if (trafficLight.toLowerCase() === "green") {
//     console.log("Go");
// } else {
//     console.log("Enter the following colors");
// }