// var products = [
//     {
//         id: 101,
//         title: "Sony LED 40 inch",
//         variations: [
//             { id: 1, color: "black", price: 1000, quantity: 2 },
//             { id: 2, color: "red", price: 1000, quantity: 9 },
//             { id: 3, color: "silver", price: 1000, quantity: 2 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         variations: [
//             { id: 1, color: "black", price: 1000, quantity: 2 },
//             { id: 2, color: "red", price: 1000, quantity: 13 },
//             { id: 3, color: "silver", price: 1000, quantity: 2 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 103,
//         title: "Bike",
//         variations: [
//             { id: 1, color: "black", price: 1000, quantity: 9 },
//             { id: 2, color: "red", price: 1000, quantity: 6 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 3.0,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//         ],
//     },
// ];

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

const products = [
    {
        id: 101,
        name: "Sony LED 40 inch",
        category: "Electronics",
        brand: "Sony",
        sku: "SONY-LED-40",
        description: "40 inch Full HD LED TV with smart features.",
        isActive: true,
        createdAt: "2021-01-15",
        updatedAt: "2022-10-22",
        tags: ["LED", "Smart TV", "HD"],
        supplier: {
            name: "ElectroHouse",
            contact: "support@electrohouse.com"
        },
        variations: [
            {
                id: 1,
                color: "Black",
                price: 50000,
                quantity: 5,
                warranty: "2 years",
                discount: 0,
                isAvailable: true
            },
            {
                id: 2,
                color: "Red",
                price: 50000,
                quantity: 1,
                warranty: "2 years",
                discount: 5,
                isAvailable: true
            },
            {
                id: 3,
                color: "Silver",
                price: 55000,
                quantity: 8,
                warranty: "3 years",
                discount: 10,
                isAvailable: false
            }
        ],
        reviews: [
            {
                id: 1,
                user: {
                    name: "Ahmad",
                    email: "ahmad@gmail.com",
                    location: "Lahore"
                },
                rating: 4.0,
                title: "Good Product",
                comment: "Very good product for the price.",
                date: "2021-02-06",
                approved: true,
                likes: 2,
                verifiedPurchase: true
            },
            {
                id: 2,
                user: {
                    name: "Zubair",
                    email: "zubair@yahoo.com",
                    location: "Karachi"
                },
                rating: 4.5,
                title: "Awesome",
                comment: "I’m impressed by the quality.",
                date: "2021-02-05",
                approved: false,
                likes: 5,
                verifiedPurchase: false
            }
        ]
    },
    {
        id: 102,
        name: "Motor Bike",
        category: "Mechnical",
        brand: "Honda",
        sku: "Bike",
        description: "Fully Modified Honda Bike",
        isActive: false,
        createdAt: "2021-01-15",
        updatedAt: "2022-10-22",
        tags: ["70 CC Bike", "125 CC Bike", "150 CC Bike"],
        supplier: {
            name: "BikeHouse",
            contact: "support@mechanichouse.com"
        },
        variations: [
            {
                id: 1,
                color: "Black",
                price: 50000,
                quantity: 5,
                warranty: "2 years",
                discount: 0,
                isAvailable: true
            },
            {
                id: 2,
                color: "Red",
                price: 50000,
                quantity: 1,
                warranty: "2 years",
                discount: 5,
                isAvailable: true
            },
            {
                id: 3,
                color: "Silver",
                price: 55000,
                quantity: 8,
                warranty: "3 years",
                discount: 10,
                isAvailable: false
            }
        ],
        reviews: [
            {
                id: 1,
                user: {
                    name: "Ahmad",
                    email: "ahmad@gmail.com",
                    location: "Lahore"
                },
                rating: 4.0,
                title: "Good Product",
                comment: "Very good product for the price.",
                date: "2021-02-06",
                approved: true,
                likes: 2,
                verifiedPurchase: true
            },
            {
                id: 2,
                user: {
                    name: "Zubair",
                    email: "zubair@yahoo.com",
                    location: "Karachi"
                },
                rating: 4.5,
                title: "Awesome",
                comment: "I’m impressed by the quality.",
                date: "2021-02-05",
                approved: false,
                likes: 5,
                verifiedPurchase: false
            }
        ]
    },
    {
        id: 103,
        name: "AK47",
        category: "War Object",
        brand: "Army",
        sku: "Army Guns",
        description: "Fully Upgraded Ak 47",
        isActive: true,
        createdAt: "2021-01-15",
        updatedAt: "2022-10-22",
        tags: ["M416", "SCARL", "AKM"],
        supplier: {
            name: "ArmyHouse",
            contact: "support@armyohouse.com"
        },
        variations: [
            {
                id: 1,
                color: "Black",
                price: 50000,
                quantity: 5,
                warranty: "2 years",
                discount: 0,
                isAvailable: true
            },
            {
                id: 2,
                color: "Red",
                price: 50000,
                quantity: 1,
                warranty: "2 years",
                discount: 5,
                isAvailable: true
            },
            {
                id: 3,
                color: "Silver",
                price: 55000,
                quantity: 8,
                warranty: "3 years",
                discount: 10,
                isAvailable: false
            }
        ],
        reviews: [
            {
                id: 1,
                user: {
                    name: "Ahmad",
                    email: "ahmad@gmail.com",
                    location: "Lahore"
                },
                rating: 4.0,
                title: "Good Product",
                comment: "Very good product for the price.",
                date: "2021-02-06",
                approved: true,
                likes: 2,
                verifiedPurchase: true
            },
            {
                id: 2,
                user: {
                    name: "Zubair",
                    email: "zubair@yahoo.com",
                    location: "Karachi"
                },
                rating: 4.5,
                title: "Awesome",
                comment: "I’m impressed by the quality.",
                date: "2021-02-05",
                approved: false,
                likes: 5,
                verifiedPurchase: false
            }
        ]
    }
];

// Question 61  /  1

// const proSupplier = products.map(p => {
//     const supplierName = p.supplier.name;
//     const supplierContact = p.supplier.contact;
//     const finalResult = `${p.name} - ${supplierName} - ${supplierContact}`;
//     return finalResult;

// });
// console.log(proSupplier);

// Question 62  /  2

const availableColors = products.map(p => {
    let trueStatus = p.isActive;
    const finalResult = trueStatus.filter
    // return trueStatus
})

console.log(availableColors);