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
        updatedAt: "2025-10-22",
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
                discount: 1,
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
        updatedAt: "2000-10-22",
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
                approved: false,
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
                approved: true,
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

// const availableColors = products.filter((act) => act.isActive)
// .map((vari) => vari.variations.filter((avai) => avai.isAvailable).map((clr) => clr.color))
// console.log(availableColors);

// Question 63  /  3

// const totalQuantity = products.map((vari) => vari.variations.filter((avai) => avai.isAvailable)
// .reduce((prev , curr) => (prev + curr.quantity) , 0))
// .reduce((prev , curr) => (prev + curr));
// console.log(totalQuantity);

// Question 64  /  4

// const dicountedVariations = products.filter((vari) => vari.variations.filter((dis) => dis.discount > 0).length > 0).map((names) => names.name);
// console.log(dicountedVariations);

// Question 65  /  5

// const allVariationsAfterDiscount = products.map((product) => {
//     return {
//         productName: product.name,
//         variation: product.variations.map((dis) => {
//             const discountedProducts = dis.price - (dis.price * dis.discount / 100);
//             return {
//                 id: dis.id,
//                 discount: dis.discount,
//                 originalPrice: dis.price,
//                 newPrice: discountedProducts
//             };
//         })
//     };
// });
// console.log(allVariationsAfterDiscount);

// Question 66  /  6

// const highestDiscout = products.reduce((accu , curr) => {
//     return curr.variations.reduce((accu2 , curr2) => {
//         const currentVariation = {...curr2 , productName: curr.name};
//         return currentVariation.discount > accu2.discount ? currentVariation : accu2;
//     } , accu)
// } , {discount: -Infinity});
// console.log(highestDiscout);

// Question 67  /  7

// const approvedEmails = products.map(product => product.reviews)
//     .reduce((allReviews, current) => allReviews.concat(current), [])
//     .filter(review => review.approved && review.likes > 3)
//     .map(review => review.user.email);
// console.log(approvedEmails);

// Question 68  /  8

// const verifiedCount = products.map(product => product.reviews)
//     .reduce((allReviews, reviews) => allReviews.concat(reviews), [])
//     .filter(review => review.verifiedPurchase).length;
// console.log(verifiedCount);

// Question 69  /  9

// missing

// Question 70  /  10

// const activeProductsWithStock = products.filter(product => {
//     const totalQuantity = product.variations.reduce((sum, variation) => {
//         return sum + (variation.quantity > 0 ? 1 : 0);
//     }, 0);
//     return product.isActive && totalQuantity > 0;
// });
// console.log(activeProductsWithStock);

// Question 71  /  11

// const productSummaries = products.map(product => {
//   const totalStock = product.variations.reduce((sum, variation) => sum + variation.quantity, 0);
//   const totalRatings = product.reviews.reduce((sum, review) => sum + review.rating, 0);
//   const avgRating = product.reviews.length > 0
//     ? (totalRatings / product.reviews.length).toFixed(2)
//     : "N/A";
//   return {
//     name: product.name,
//     totalStock,
//     avgRating: parseFloat(avgRating),
//     supplierContact: product.supplier.contact
//   };
// });
// console.log(productSummaries);

// Question 72  /  12

// function getSupplierReport(products) {
//     return products.reduce((report, product) => {
//         const supplierName = product.supplier.name;
//         if (report[supplierName]) {
//             report[supplierName]++;
//         } else {
//             report[supplierName] = 1;
//         }
//         return report;
//     }, {});
// };

// const supplierReport = getSupplierReport(products);
// console.log(supplierReport);

// Question 73  /  13

// const productsReviewedFromLahore = products.filter(product => {
//   const reviewedByLahoreUser = product.reviews.reduce((found, review) => {
//     return found || review.user.location === "Lahore";
//   }, false);

//   return reviewedByLahoreUser;
// });
// console.log(productsReviewedFromLahore);

// Question 74  /  14

// const top3Products = products
//     .filter(product => product.reviews.length >= 2)
//     .map(product => {
//         const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
//         const avgRating = totalRating / product.reviews.length;
//         return {
//             id: product.id,
//             name: product.name,
//             avgRating: parseFloat(avgRating.toFixed(2))
//         };
//     })
//     .sort((a, b) => b.avgRating - a.avgRating)
//     .slice(0, 3);
// console.log(top3Products);

// Question 75  /  15

// const inconsistentProducts = products.filter(product => {
//   const hasInconsistency = product.variations.reduce((found, variation) => {
//     return found || (variation.quantity === 0 && variation.isAvailable);
//   }, false);

//   return hasInconsistency;
// });
// console.log(inconsistentProducts);

// Question 76  /  16

// const uniqueTags = Array.from(
//     products.map(product => product.tags)
//         .reduce((allTags, tags) => allTags.concat(tags), [])
//         .reduce((tagSet, tag) => tagSet.add(tag), new Set())
// );
// console.log(uniqueTags);