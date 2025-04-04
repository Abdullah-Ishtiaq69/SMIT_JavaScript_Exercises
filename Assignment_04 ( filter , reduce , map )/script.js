var products = [
    {
        id: 101,
        title: "Sony LED 40 inch",
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
            { id: 1, color: "green", price: 55000, quantity: 5 },
            { id: 2, color: "black", price: 50000, quantity: 1 },
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

// Question 53  /  3

// let product = products.reduce((prev, curr) => {
//     let finalProduct = curr.variations.reduce((prev2, curr2) => (prev2 + curr2.quantity), 0);
//     return finalProduct + prev
// }, 0);
// console.log(product);

// Question 54  /  4
