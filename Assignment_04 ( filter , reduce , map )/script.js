var products = [
    {
        id: 101,
        title: "Sony LED 40 inch",
        variations: [
            { id: 1, color: "black", price: 1000, quantity: 2 },
            { id: 2, color: "red", price: 1000, quantity: 9 },
            { id: 3, color: "silver", price: 1000, quantity: 2 },
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
            { id: 1, color: "black", price: 1000, quantity: 2 },
            { id: 2, color: "red", price: 1000, quantity: 13 },
            { id: 3, color: "silver", price: 1000, quantity: 2 },
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
        id: 103,
        title: "Bike",
        variations: [
            { id: 1, color: "black", price: 1000, quantity: 9 },
            { id: 2, color: "red", price: 1000, quantity: 6 },
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

// Question 51  /  1

// let productTitles = products.map((p) => (p.title));
// console.log(productTitles);

// Question 52  /  2

// let product = products.filter((p) => (p.variations.some((p) => (p.color === 'black'))));
// console.log(product);

// Another Way

// let product = products.map((p) => (p.variations.filter((p) => (p.color === 'black'))));
// console.log(product);

// Another Way

// let product = products.filter((p) => {
//     let filteredVariation = p.variations.filter((p) => (p.color === 'black')).length;
//     return filteredVariation;
// });
// console.log(product);

// Question 53  /  3

// let product = products.reduce((prev , curr) => {
//     let allQuantity = curr.variations.reduce((prev2 , curr2) => (prev2 + curr2.quantity) , 0);
//     return prev + allQuantity;
// } , 0);
// console.log(product);

// Question 54  /  4

// let product = products.map((p) => {
//     let filteredProduct = p.reviews.filter((p) => (p.status));

//     let totalReviews = filteredProduct.reduce((prev, curr) => (prev + curr.rating), 0);

//     let averageReviews = totalReviews / filteredProduct.length;

//     return averageReviews
// })
// console.log(product);

// Question 55  /  5

// let product = products.filter(p => p.reviews.filter(p => p.rating === 5.0).length);
// console.log(product);

// Question 56  /  6

// let product = products.map(p => ({
//     title : p.title,
//     variations : p.variations.map(j => ({
//         color : j.color,
//         price : j.price,
//         quantity : j.quantity,
//     })),
// }));
// console.log(product);

// Question 57  /  7

// let product = products.reduce((prev , curr) => {
//     totalCost = curr.variations.reduce((prev2 , curr2) => {
//         return prev2 + (curr2.price * curr2.quantity);
//     } , 0)
//     return prev + totalCost;
// } , 0);
// console.log(product);

// Question 58  /  8

// let product = products.filter(p => p.variations.filter(p => p.quantity > 5).length);
// console.log(product);

// Question 59  /  9

// let product = products.map(p => ({
//     title : p.title,
//     totalVariations : p.variations.length,
//     totalReviews : p.reviews.length,
// }));

// console.log(product);

// Question 60  /  10

// let product = products.reduce((prev , curr) => {

//     let totalStock = curr.variations.reduce((prev2 , curr2) => (prev2 + curr2.quantity) , 0);
    
//     if (prev === 0 || totalStock > prev.totalStock) {
//         return {title : curr.title , totalStock : totalStock}
//     };

//     return prev;

// },0);

// console.log(product);