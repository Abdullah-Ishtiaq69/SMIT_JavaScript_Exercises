// Chapter 01

// Question 1

// alert ("Hello Welcome to SMIT");

// // Question 2

// alert ("Error! Please enter a valid password.");

// // Question 3

// var alert_3 = ("Welcome to JS Land...\nHappy Coding!");
// alert (alert_3);

// Question 4

// var alert_01 = "Welcome to JS Land";
// var alert_02 = "Happy Coding!";
// alert(alert_01);
// alert(alert_02);

// Chapter 02

// Question 5  /  1

// var username;

// Question 6  /  2

// var myName = "Abdullah Ishtiaq";

// Question 7  /  3

// var message;
// message = "Hello World";
// alert(message);

// Question 8  /  4

// userName = "Abdullah Ishtiaq";
// var age = 15;
// var certificate = "Certified Moblie app Development";
// alert ("Student name: " + userName );
// alert ("Student Age: " + age);
// alert ("Student Certification: " + certificate);

// Question 9  /  5

// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert (pizza);

// Question 10  /  6

// var email = "abdullahishtiaq335@gmail.com";
// alert ("My Email Addres is : " + email);

// Question 11  /  7

// var book = "A smarter way to learn JavaScript";
// alert ("I am learning from : " + book);

// Question 12  /  8

// document.write ("Yeah ! I can write HTML content through JavaScript");

// Question 13  /  9

// var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert (design);
// document.write(design);

// Chapter 03

// Question 14  /  1

// var age = 15;
// alert ("I am " + age + " years old.");

// Question 15  /  2  missing

// ------------------- Missing -------------------

// Question 16  /  3

// var birthYear = 2009;
// document.write ("My Birth Year is " + birthYear + "<br />");
// document.write ("Data type of declared variable is " + typeof birthYear);

// Question 17  /  4

// var visiterName = prompt ("Enter Your Name");
// var product = prompt ("Product Name");
// var quantity = prompt ("how many quantity you need");
// document.write ("<h4>" + visiterName + " Ordered " + quantity + " " + product + " on Gold Clothing Store" + "</h4>");

// Chapter 04

// Question 18  /  1

// var x = "Hello " , y = "World" , z = "!"; 
// console.log (x + y + z);

// Question 19  /  2

// Legal variable names
// var fullName ;
// var $fullName ;
// var fulL$Name ;
// var fullName$ ;
// var _fullName ;
// var full_name ;
// var fullName_ ;
// var full123Name ;
// var fullName123 ;
// Illegal variable names
// var 123fullName ;
// var *fullName ;
// var full*Name ;
// var fullName* ;
// var -fullname ;
// var full-Name ;
// var fullName- ;

// Question 20  /  3

// document.write ("<h2> Rules for naming JS variables </h2>");
// document.write ("Variables name can only contain, numbers, $ (dollar symbol) or _ (underscore) .<b> For Example : $my_1stVariable </b><br />");
// document.write ("Variable must begin with a letter, $ (dollar symbol) or _ (underscore). <b> For Example : $name, _name or name.</b><br />");
// document.write ("Variables names are case sensitive. <br />");
// document.write ("Variables names should not be JS keywords. <b> For Example : var, if, else, etc.</b>");

// Chapter 05

// Question 21  /  1

// var a = 5;
// var b = 9;
// document.write("Sum of " + a + " & " + b + " is ", (a + b));

// Question 22  /  2

// console.log("Subtraction of " + a + " & " + b + " is ", (a - b));
// console.log("Multiplication of " + a + " by " + b + " is ", (a * b));
// console.log("Division of " + a + " by " + b + " is ", (a / b));
// console.log("Modulus of " + a + " by " + b + " is ", (a % b));

// Question 23  /  3

// var math_expr;
// document.write("Value after variable declaration is : ", math_expr + "<br />")
// math_expr = 5;
// document.write("Initial Value : ", math_expr + "<br />");
// math_expr++
// document.write("Value after Increment is : ", math_expr + "<br />");
// math_expr += 7;
// document.write("Value after Addition is : ", math_expr + "<br />");
// math_expr--
// document.write("Value after decrement is : ", math_expr + "<br />");
// document.write("Value after decrement is : ", (math_expr) % 3);

// Question 24  /  4

// var ticketPrice = 600;
// var quantity = prompt("Enter Your Quantity");
// document.write("<h2>Each ticket price is : " + ticketPrice), "</h2>";
// document.write("<h2>Total cost to buy " + quantity, " tickets to a movie is ", quantity * ticketPrice, " Pkr </h2>");

// Question 24  /  5

// var userInput = prompt("Enter a number for its table");
// var tableCount = 1;
// document.write("Table of " + userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput + "<br />");
// document.write(userInput + " * " + tableCount + " = " + tableCount++ * userInput);

// Question 25  /  6

// ------------------- Missing -------------------

// Question 26  /  7

// var item1 = parseInt(prompt("Price of Item 1"));
// var item2 = parseInt(prompt("Price of Item 2"));
// var item1Quantity = parseInt(prompt("Enter a quantity of item1"));
// var item2Quantity = parseInt(prompt("Enter a quantity of item2"));
// var shippingCharges = 300;
// var totalPrice = ( item1 * item1Quantity ) + ( item2 * item2Quantity )  + shippingCharges;
// document.write("<h1> Shopping Cart </h1>");
// document.write("Price of item 1 is " + item1 + "<br />");
// document.write("Quantity of item 1 is " + item1Quantity + "<br />");
// document.write("Price of item 2 is " + item2 + "<br />");
// document.write("Quantity of item 2 is " + item2Quantity + "<br />");
// document.write("Shipping Charges " + shippingCharges + "<br />");
// document.write("Total Cost of your order is " + totalPrice);

// Question 27  /  8

// var totalMarks = 500;
// var obtainMarks = 470;
// var percentage = obtainMarks / totalMarks * 100;
// document.write("<h1> Marks Sheet </h1>");
// document.write("Total marks: " + totalMarks + "<br />");
// document.write("Marks obtained: " + obtainMarks + "<br />");
// document.write("Percentage: " + percentage + "%");

// Question 28  /  9

// ------------------- Missing -------------------

// Question 29  /  10

// var someNumber = 2 + 5 * 10 / 2;
// console.log(someNumber);

// Question 30  /  11

// var currentYear = 2025;
// var birthYear = 2009;
// var finalAge = currentYear - birthYear;
// document.write("Current Year: " + currentYear + "<br />");
// document.write("Birth Year: " + birthYear + "<br />");
// document.write("Your Age is:" + finalAge);

// Question 31  /  12

// ------------------- Missing -------------------

// Question 32  /  13

// var favSnack = "Potato Fries";
// var currentAge = 16;
// var maxAge = 50;
// var amountPerDay = 2;
// var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;
// document.write ("<h1> The Lifetime Supply Calculator </h1><br />");
// document.write ("Favourite Snack : " + favSnack + "<br />");
// document.write ("Current Age : " + currentAge + "<br />");
// document.write ("Estimated Maximum Age : " + maxAge + "<br />");
// document.write ("Amount of Snacks per day : " + 3 + "<br />");
// document.write("<b>You will need " + totalNeeded + " " + favSnack + " to last you until the ripe old age of " + maxAge + ". </b>");