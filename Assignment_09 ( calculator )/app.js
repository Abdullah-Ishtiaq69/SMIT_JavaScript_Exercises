// const output = document.getElementById('output');
// const allButtons = document.querySelectorAll('.num-main > div')
// const clearOutput = document.getElementById('clear');

// let num1 = '';
// let num2 = '';
// let operator = '';
// let resultShown = null;

// allButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         let value = button.textContent;
//         if ('0123456789.'.includes(value)) {
//             if (!operator) {
//                 num1 += value;
//                 output.textContent = num1;
//             } else {
//                 num2 += value;
//                 output.textContent = num2;
//             }
//         } else if ('+-*/'.includes(value)) {
//             operator = value
//         } else if (value === '=') {
//             let result = 0;
//             if (operator && num1 && num2) {
//                 let firstNumber = +num1;
//                 let secondNumber = +num2;
//                 switch (operator) {
//                     case '+':
//                         result = firstNumber + secondNumber;
//                         break;
//                     case '-':
//                         result = firstNumber - secondNumber;
//                         break;
//                     case '*':
//                         result = firstNumber * secondNumber;
//                         break;
//                     case '/':
//                         result = firstNumber / secondNumber;
//                 }

//                 output.textContent = result;

//                 firstNumber += '';
//                 secondNumber += '';
//                 operator += '';
//             };
//         };
//     });
// });









































// // let first = "", second = "", op = "", resultShown = false;
// // const out = document.getElementById("output");

// // let number = document.querySelectorAll(".first-num div, .second-num div, .third-num div, .fourth-num div");
// // number.forEach(btn => btn.onclick = () => {
// //     const val = btn.innerText;

// //     if ("0123456789.".includes(val)) {
// //        if (resultShown) { first = ""; resultShown = false; }
// //         if (!op) { first += val; out.innerText = first; }
// //         else { second += val; out.innerText = second; }
// //     } else if ("+-*/".includes(val)) {
// // if (first) op = val;
// //     } else if (val === "=" && first && second && op) {
// //         let a = parseFloat(first), b = parseFloat(second), r;
// //         if (op === "+") r = a + b;
// //         if (op === "-") r = a - b;
// //         if (op === "*") r = a * b;
// //         if (op === "/") r = b !== 0 ? a / b : "Error";
// //         out.innerText = r;
// //         first = r.toString(); second = ""; op = ""; resultShown = true;
// //     }
// // });

// // document.getElementById("clear").onclick = () => {
// //     first = second = op = ""; resultShown = false; out.innerText = "";
// // };


// const output = document.getElementById('output');
// const allButtons = document.querySelectorAll('.num-main > div');
// const clearOutput = document.getElementById('clear');

// let num1 = '';
// let num2 = '';
// let operator = '';
// let resultShown = false;

// function resetCalculator() {
//     num1 = '';
//     num2 = '';
//     operator = '';
//     resultShown = false;
//     output.textContent = '';
// }

// allButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         let value = button.textContent;

//         // If value is number or decimal
//         if ('0123456789.'.includes(value)) {
//             if (resultShown) {
//                 // If result is shown and a number is pressed, start fresh
//                 resetCalculator();
//             }

//             if (!operator) {
//                 if (value === '.' && num1.includes('.')) return;
//                 num1 += value;
//                 output.textContent = num1;
//             } else {
//                 if (value === '.' && num2.includes('.')) return;
//                 num2 += value;
//                 output.textContent = num2;
//             }
//         }

//         // If value is an operator
//         else if ('+-*/'.includes(value)) {
//             if (resultShown) {
//                 // Use result as first number
//                 resultShown = false;
//             }
//             if (num1) operator = value;
//         }

//         // If equals is pressed
//         else if (value === '=') {
//             if (operator && num1 && num2) {
//                 let firstNumber = parseFloat(num1);
//                 let secondNumber = parseFloat(num2);
//                 let result;

//                 switch (operator) {
//                     case '+': result = firstNumber + secondNumber; break;
//                     case '-': result = firstNumber - secondNumber; break;
//                     case '*': result = firstNumber * secondNumber; break;
//                     case '/': result = secondNumber !== 0 ? firstNumber / secondNumber : 'Error'; break;
//                 }

//                 output.textContent = result;
//                 num1 = result.toString(); // store result for next calculation
//                 num2 = '';
//                 operator = '';
//                 resultShown = true;
//             }
//         }
//     });
// });

// // Clear button
// clearOutput.addEventListener('click', resetCalculator);


// let num1 = +prompt();
// let num2 = +prompt();
// let op = prompt();

// if(op === '+') {
//     console.log(num1 + num2);
// } else if (op === '-') {
//     console.log(num1 - num2);
// } else if(op === '*') {

// }

const allButtons = document.querySelectorAll('.num-main > div');

function checkButton() {
    allButtons
}
