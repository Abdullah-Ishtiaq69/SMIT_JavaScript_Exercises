var products = [
    {
        id: 101,
        title: "Car",
        variations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 3 },
            { id: 3, color: "silver", price: 55000, quantity: 4 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
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
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
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
            { id: 1, color: "black", price: 55000, quantity: 20 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 3.0,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
        ],
    },
];

// Question 1

// var userInput = prompt("Enter ID Number");
// for (a = 0; a < products.length; a++) {
//     if (userInput == products[a].id) {
//         console.log(products[a]);
//     };
// };

// Question 2

// for (b = 0; b < products.length; b++) {
//     console.log(products[b].title);
// };

// Question 3

// var colorInput = prompt("Enter ID Number for available colors");
// for (c = 0; c < products.length; c++) {
//     for (d = 0; d < products[c].variations.length; d++) {
//         for (e = 0; e < products[c].variations.length; e++) {
//             if (colorInput == products[c].id) {
//                 console.log(products[c].variations[d].color);
//             };
//         };
//     };
// };

// Question 4

// var productTotalQuantity = "Mobile";
// var totalQuantity = 0;
// for (f = 0; f < products.length; f++) {
//     for (g = 0; g < products[f].variations.length; g++) {
//         if (productTotalQuantity === products[f].title) {
//             totalQuantity += products[f].variations[g].quantity;
//         };
//     };
// };
// console.log("Total Quantity is : " + totalQuantity);

// Question 5

// var lessCount = 0;
// for (h = 0; h < products.length; h++) {
//     for (i = 0; i < products[h].variations.length; i++) {
//         if (products[h].variations[i].quantity < 2) {
//             console.log (products[h].title);
//         };
//     };
// };

// Question 6

// -------------------------------------------------------------------------------------------------------

// Question 7

// for (l = 0; l < products.length; l++) {
//     for (m = 0; m < products[l].reviews.length; m++) {
//         if (products[l].reviews[m].status) {
//             console.log(products[l].reviews[m]);
//         };
//     };
// };

// Question 8

// --------------------------------------------------------------------------------------