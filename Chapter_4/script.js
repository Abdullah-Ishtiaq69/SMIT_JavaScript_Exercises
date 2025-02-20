var x = "Hello " ;
var y = "World";
var z = "!";

console.log (x + y + z);

// Legal variable names

/*
var fullName ;
var $fullName ;
var fulL$Name ;
var fullName$ ;
var _fullName ;
var full_name ;
var fullName_ ;
var full123Name ;
var fullName123 ;
*/

// Illegal variable names

/*
var 123fullName ;
var *fullName ;
var full*Name ;
var fullName* ;
var -fullname ;
var full-Name ;
var fullName- ;
*/

document.write ("<h2>Rules for naming JS variables</h2>");
document.write ("Variables name can only contain, numbers, $ (dollar symbol) or _ (underscore) .<b> For Example : $my_1stVariable </b><br />");
document.write ("Variable must begin with a letter, $ (dollar symbol) or _ (underscore). <b> For Example : $name, _name or name.</b><br />");
document.write ("Variables names are case sensitive. <br />");
document.write ("Variables names should not be JS keywords. <b> For Example : var, if, else, etc.</b>")