var a = 5;
var b = 9;
console.log("Sum of " + a + " & " + b + " is ", (a + b));

// Question 2

console.log("Subtraction of " + a + " & " + b + " is ", (a - b));
console.log("Multiplication of " + a + " by " + b + " is ", (a * b));
console.log("Division of " + a + " by " + b + " is ", (a / b));
console.log("Modulus of " + a + " by " + b + " is ", (a % b));

// Question 3

var math_expr = 5;
console.log("Value after variable declaration is : ", math_expr)
console.log("Initial Value : ", math_expr);
console.log("Value after Increment is : ", ++math_expr);
console.log("Value after Addition is : ", math_expr + 7);
console.log("Value after decrement is : ", --math_expr + 7);
console.log("Value after decrement is : ", (math_expr + 7) % 3);

// Question 4

var ticketPrice = 600;
var quantity = prompt("Enter Your Quantity");
document.write("<h2>Each ticket price is : " + ticketPrice), "</h2>";
document.write("<h2>Total cost to buy " + quantity, " tickets to a movie is ", quantity * ticketPrice, " Pkr </h2>");

// Question 5

var table = prompt("Enter a number for its table");

if (table > 0) {
    console.log ("Table of" , table);
    console.log (table , "*" , "1 =" , table * 1);
    console.log (table , "*" , "2 =" , table * 2);
    console.log (table , "*" , "3 =" , table * 3);
    console.log (table , "*" , "4 =" , table * 4);
    console.log (table , "*" , "5 =" , table * 5);
    console.log (table , "*" , "6 =" , table * 6);
    console.log (table , "*" , "7 =" , table * 7);
    console.log (table , "*" , "8 =" , table * 8);
    console.log (table , "*" , "9 =" , table * 9);
    console.log (table , "*" , "10 =" , table * 10);

} else {
    console.log ("Enter a number that are greater then 0");
}

// Question 6

var C = 25;
var F = 70;
C = ((F - 32) * 5) / 9;
F = (C * 9) / 5 + 32;
document.write(C + " is equals to" + F + " in farenheit <br> ");
document.write(F + " is equals to  " + C + " in celsius <br> ");

// Question 7

var item1 = prompt("Price of Item 1");
var item2 = prompt("Price of Item 2");
var item1Quantity = prompt("Enter a quantity of item1");
var item2Quantity = prompt("Enter a quantity of item2");
var shippingCharges = 300;

if (item1Quantity > 0 || item2Quantity > 0) {
    document.write ("<h1>Shopping Cart</h1>")
    document.write("Price of item 1 is ", item1 + "<br />");
    document.write("Quantity of item 1 is ", item1Quantity + "<br />");
    document.write("Price of item 2 is ", item2 + "<br />");
    document.write("Quantity of item 2 is ", item2Quantity + "<br />");
    document.write("Shipping Charges is ", shippingCharges + "<br /> <br />");
    document.write("<b>Total cost of your order is ", (item1 * item1Quantity) + (item2 * item2Quantity) + shippingCharges + "</b>");
} else {
    document.write ("You didn't ordered yet");
}

// Question 8

var totalMarks = 700;
var obtainMarks = prompt("Enter your marks for your percentage");
if (obtainMarks <= totalMarks) {
    document.write ("<h1>Mark Sheet</h1>")
    document.write("Total Marks : ", totalMarks, "<br />");
    document.write("Obtain Marks : ", obtainMarks, "<br />");
    document.write("<b> Percentage : ", obtainMarks / totalMarks * 100, "% </b>")
} else {
    document.write ("<b>Enter a Number between 1 to 700 to check your percentage</b>");
}

// Question 9

var usToPakistani = 278.20;
var saudiToPakistani = 74.53;

var pakistaniToUs = prompt ("Dollar To Rupee");
var pakistaniToSaudi = prompt ("Riyal To Rupee");

if (pakistaniToUs > 0) {
    document.write ("Total Currency in PKR : " , pakistaniToUs * usToPakistani + " RS <br />");
} else if (pakistaniToSaudi > 0) {
    document.write ("Total Currency in PKR : " , pakistaniToSaudi * saudiToPakistani + " RS <br />");
} else {
    document.write ("Enter a Number that are greater then 0");
}

// Question 10

var num = 2;
console.log (((num + 5) * 10) / 2);

// Question 11

var currentYear = 2025;
var birthYear = 2009;

console.log ("Your Age is" , currentYear - birthYear);

// Question 12

var radius = 5;
var circumference = 2 * 3.142 * radius;
document.write("The circumference is: " + circumference + "<br>");
var area = 3.142 * radius * radius;
document.write("The area is: " + area + "<br>");

// Question 13

var favSnack = "Lays";
var currentAge = 16;
var maxAge = 60;
var amountPerDay = 2;
var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;
document.write ("Favourite Snack : " + favSnack + "<br />");
document.write ("Current Age : " + currentAge + "<br />");
document.write ("Estimated Maximum Age : " + maxAge + "<br />");
document.write ("Amount of Snacks per day : " + 3 + "<br />");
document.write("<b>You will need " + totalNeeded + " " + favSnack + " to last you until the ripe old age of " + maxAge + ". </b>");