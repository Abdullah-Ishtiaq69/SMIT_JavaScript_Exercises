var a = 5;
var b = 9;
console.log ("Sum of " + a + " & " + b + " is " , (a + b));
console.log ("Subtraction of " + a + " & " + b + " is " , (a - b));
console.log ("Multiplication of " + a + " by " + b + " is " , (a * b));
console.log ("Division of " + a + " by " + b + " is " , (a / b));
console.log ("Modulus of " + a + " by " + b + " is " , (a % b));

var math_expr = 5;
console.log ("Value after variable declaration is : " , math_expr)
console.log ("Initial Value : " , math_expr);
console.log ("Value after Increment is : " , ++math_expr);
console.log ("Value after Addition is : " , math_expr + 7);
console.log ("Value after decrement is : " , --math_expr + 7);
console.log ("Value after decrement is : " , ( math_expr  + 7 ) % 3);

var ticketPrice = 600;
var quantity = prompt ("Enter Your Quantity");
document.write ("<h2>Each ticket price is : " + ticketPrice) , "</h2>";
document.write ("<h2>Total cost to buy " + quantity , " tickets to a movie is " , quantity * ticketPrice , " Pkr </h2>");