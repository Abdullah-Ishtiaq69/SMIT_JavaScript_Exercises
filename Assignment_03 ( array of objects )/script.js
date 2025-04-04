var products = [
  {
    id: 101,
    title: "Car",
    variations: [
      { id: 1, color: "black", price: 5000, quantity: 5 },
      { id: 2, color: "red", price: 6000, quantity: 1 },
      { id: 3, color: "silver", price: 554500, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: false,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "orange", price: 5000, quantity: 5 },
      { id: 2, color: "red", price: 5000, quantity: 1 },
      { id: 3, color: "purple", price: 10000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 5.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 5.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "Best Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "magenta", price: 5000, quantity: 20 },
      { id: 2, color: "blue", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 8.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 8.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: true,
      },
    ],
  },
];

// Question 42  /  1

// Without Function

// var userInputID = +prompt("Enter ID Number");
// for (let a = 0; a < products.length; a++) {
//     if (userInputID === products[a].id) {
//         console.log(products[a]);
//     };
// };

// With Function

// function productById(productID) {
//     for(let i = 0 ; i < products.length ; i++) {
//         if(productID === products[i].id) {
//             console.log(products[i]);
//         };
//     };
// };
// productById(101);

// Question 43  /  2

// Without Function

// for (b = 0; b < products.length; b++) {
//     console.log(products[b].title);
// };

// With Function

// function allProductTitle(product) {
//   for (let i = 0; i < product.length; i++) {
//     console.log(product[i].title);
//   };
// };
// allProductTitle(products);

// Question 44  /  3

// Without Function

// let userInput = +prompt("Enter Id For Available Colors");
// for (let i = 0; i < products.length; i++) {
//   if (userInput === products[i].id) {
//     for (let j = 0; j < products[i].variations.length; j++) {
//       console.log(products[i].variations[j].color);
//     };
//   };
// };

// With Function

// let userInput = +prompt("Enter Id For Available Colors");
// function AvailableColorsById(product) {
//   for (let i = 0; i < product.length; i++) {
//     if (userInput === product[i].id) {
//       for (let j = 0; j < product[i].variations.length; j++) {
//         console.log(product[i].variations[j].color);
//       };
//     };
//   };
// };
// AvailableColorsById(products);

// Question 45  /  4

// Without Function

// let userInput = +prompt("Enter Id for Total Quantity");
// for (let i = 0; i < products.length; i++) {
//   if (userInput === products[i].id) {
//     let totalQuantity = 0;
//     for (let j = 0; j < products[i].variations.length; j++) {
//       totalQuantity += products[i].variations[j].quantity;
//     };
//     console.log(totalQuantity);
//   };
// };

// With Function

// let userInput = +prompt("Enter ID for Total Quantity");
// function totalQuantityById(product) {
//   for (let i = 0; i < product.length; i++) {
//     if (userInput === product[i].id) {
//       let totalQuantity = 0;
//       for (let j = 0; j < product[i].variations.length; j++) {
//         totalQuantity += product[i].variations[j].quantity;
//       };
//       console.log(totalQuantity);
//     };
//   };
// };
// totalQuantityById(products);

// Question 46  /  5

// Without Function

// for (let i = 0; i < products.length; i++) {
//   for (let j = 0; j < products[i].variations.length; j++) {
//     if (products[i].variations[j].quantity < 2) {
//       let lessThen2Quantity = 0;
//       lessThen2Quantity = products[i].variations[j];
//       console.log(lessThen2Quantity);
//     };
//   };
// };

// With Function

// function lessThen2Quantity(product) {
//   for (let i = 0; i < product.length; i++) {
//     for (let j = 0; j < product[i].variations.length; j++) {
//       let lessThenQuantity = 0;
//       if (product[i].variations[j].quantity < 2) {
//         lessThenQuantity = product[i].variations[j];
//         console.log(lessThenQuantity);
//       };
//     };
//   };
// };
// lessThen2Quantity(products);

// Question 47  /  6

//  Without Function

// let highestRating = 0;
// let highestRatedProduct = null;
// for (let i = 0; i < products.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < products[i].reviews.length; j++) {
//     sum += products[i].reviews[j].rating;
//   };
//   avgSum = sum / products[i].reviews.length;
//   if (avgSum > highestRating) {
//     highestRating = avgSum;
//     highestRatedProduct = products[i].title;
//   };
// };
// console.log(`Highest Rated Product is ${highestRatedProduct}`);

// With Function

// let highestRating = 0;
// let highestRated = null;
// function highestRatedProduct(product) {
//   for (let i = 0; i < product.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < product[i].reviews.length; j++) {
//       sum += product[i].reviews[j].rating;
//     };
//     avgSum = sum / product[i].reviews.length;
//     if (avgSum > highestRating) {
//       highestRating = avgSum;
//       highestRated = product[i].title;
//     };
//   };
//   return console.log(`Highest Rated Product is ${highestRated}`);
// };
// highestRatedProduct(products);

// Question 48  /  7

// Without Function

// for (let i = 0; i < products.length; i++) {
//   for (let j = 0; j < products[i].reviews.length; j++) {
//     if (products[i].reviews[j].status) {
//       console.log(products[i].reviews[j]);
//     };
//   };
// };

// With Function

// function statusTrue(product) {
//   for (let i = 0; i < product.length; i++) {
//     for (let j = 0; j < product[i].reviews.length; j++) {
//       if (product[i].reviews[j].status) {
//         console.log(product[i].reviews[j]);
//       };
//     };
//   };
// };
// statusTrue(products);

// Question 49  /  8

// Without Function

// for (let i = 0; i < products.length; i++) {
//   let expensiveVariation = 0;
//   let mostExpensiveVariation = null;
//   for (let j = 0; j < products[i].variations.length; j++) {
//     if (expensiveVariation < products[i].variations[j].price) {
//       expensiveVariation = products[i].variations[j].price;
//       mostExpensiveVariation = products[i].variations[j];
//     };
//   };
//   console.log(`${products[i].title} - ${mostExpensiveVariation.color} (${expensiveVariation})`);
// };

// With Function

// function mostExpensiveVariation(product) {
//   for (let i = 0; i < product.length; i++) {
//     let expensiveVariation = 0;
//     let expensiveVariationProduct = null;
//     for (let j = 0; j < product[i].variations.length; j++) {
//       if (expensiveVariation < product[i].variations[j].price) {
//         expensiveVariation = product[i].variations[j].price;
//         expensiveVariationProduct = product[i].variations[j];
//       };
//     };
//     console.log(`${product[i].title} - ${expensiveVariationProduct.color} (${expensiveVariation})`);
//   };
// };
// mostExpensiveVariation(products);

// Question 50  /  9

// Without Function

// let totalSumOfPrice = 0;
// let totalSumOfQuantity = 0;
// let totalStockValue = 0;
// for (let i = 0; i < products.length; i++) {
//   for (let j = 0; j < products[i].variations.length; j++) {
//     totalSumOfPrice += products[i].variations[j].price;
//     totalSumOfQuantity += products[i].variations[j].quantity;
//     totalStockValue = totalSumOfPrice * totalSumOfQuantity;
//   };
// };
// console.log(totalStockValue);