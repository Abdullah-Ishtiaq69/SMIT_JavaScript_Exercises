var userAge = prompt("Enter your Age");

if (userAge < 12) {
    console.log("You are Eligible for Child Ticket.");
    window.alert("You are Eligible for Child Ticket.");
} else if (userAge < 17 && userAge > 11) {
    console.log("You are eligible for a Teen Ticket.");
    window.alert("You are eligible for a Teen Ticket.");
} else if (userAge > 17 && userAge < 65) {
    console.log("You are eligible for an Adult Ticket.");
    window.alert("You are eligible for an Adult Ticket.");
} else if (userAge > 64) {
    console.log("You are eligible for a Senior Ticket.");
    window.alert("You are eligible for a Senior Ticket.");
} else {
    console.error ("Enter only Numeric value");
}