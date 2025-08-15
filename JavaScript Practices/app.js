// const userOne = {
//     name: "abdullah",
//     email: "abdullah@gmail.com",
//     login: function () {
//         console.log("abdullah has logged in");
//     },
//     logout: function () {
//         console.log("abdullah has logged out");
//     }
// };

// const userTwo = {
//     name: "ali",
//     email: "ali@gmail.com",
//     login: function () {
//         console.log("ali has logged in");
//     },
//     logout: function () {
//         console.log("ali has logged out");
//     }
// };

// console.log(userOne.login());
// console.log(userTwo.logout());

// ---------------------------------------------------------------------

// const userOne = {
//     name: "abdullah",
//     email: "abdullah@gmail.com",
//     login() {
//         console.log(userOne.name);
//     }
// }

// const userTwo = {
//     name: "ahmed",
//     email: "ahmed@gmail.com",
//     login() {
//         console.log(userTwo.name);
//     }
// }

// console.log(userOne.login());
// console.log(userTwo.login());

// ---------------------------------------------------------------------

// const userOne = {
//     name: "abdullah",
//     email: "abdullahIshtiaq@gmail.com",
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }

// const userTwo = {
//     name: "ali",
//     email: "ali@gmail.com",
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }

// console.log(userOne.login());
// console.log(userTwo.logout());

// ---------------------------------------------------------------------

// const user = {
//     username: 'Ali',
//     age: 24,
//     login: () => {
//         console.log(`${this.username} has logged in`)
//     }
// }
// console.log(user.login());

// ---------------------------------------------------------------------

// function createUser(name, email) {
//     let user = {}
//     user.name = name
//     user.email = email
//     user.login = function login() {
//         console.log(`${this.name} has logged in`);
//     }
//     user.logout = function logout() {
//         console.log(`${this.name} has logged out`);
//     }

//     return user
// }

// let userOne = createUser("abdullah", "abdullah@gmail.com");
// userOne.login()

// let userTwo = createUser("ali", "ali@gmail.com");
// userTwo.login()

// console.log(userOne);
// console.log(userTwo);

// proof

// console.log(userOne.login === userTwo.login);

// ---------------------------------------------------------------------

// const userMethods = {
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }

// function createUser(name) {
//     let user = {}
//     user.name = name
//     user.email = `${name}@gmail.com`
//     user.login = userMethods.login
//     user.logout = userMethods.logout
//     return user
// }

// let userOne = createUser("abdullah");
// let userTwo = createUser("ali");

// userOne.login()
// userTwo.login()

// ---------------------------------------------------------------------

// Tip: Object.create() ka pehla parameter mandatory hai, sirf 2 cheezien de saktey hn 1) object , 2) null

// const userMethods = {
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }

// function createUser(name) {
//     let user = Object.create(userMethods)
//     user.name = name
//     user.email = `${name}@gmail.com`

//     return user
// }

// let userOne = createUser("abdullah")
// userOne.login()
// let userTwo = createUser("ali")
// userTwo.logout()

// console.log(userOne);
// console.log(userTwo);

// ---------------------------------------------------------------------

// --------------------------- call ---------------------------

// const userOne = {
//     name: "abdullah",
//     email: "abdullah@gmail.com",
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }

// const userTwo = {
//     name: "ali",
//     email: "ali@gmail.com"
// }

// userOne.login.call(userTwo);

// --------------------------- apply ---------------------------

// const userOne = {
//     name: "abdullah",
//     email: "abdullah@gmail.com",
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }

// const userTwo = {
//     name: "ali",
//     email: "ali@gmail.com"
// }

// userOne.login.apply(userTwo);

// --------------------------- bind ---------------------------

// const userOne = {
//     name: "abdullah",
//     email: "abdullah@gmail.com",
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }

// const userTwo = {
//     name: "ali",
//     email: "ali@gmail.com"
// }

// let userTwoBinded = userOne.login.bind(userTwo)
// userTwoBinded()

// -------------------------------- summary --------------------------------

// 4 new things:

// 1) object.create() -> object banata ha is key argument main wo obj pass kartey hain jo is object key prototype main add karna ha.

// 2) .call() ye sirf function ko call karwata ha or iskey first argument main us object ka name likhtey hain jis ke sath is fuunction key this ki binding karwani ho.

// 3) .apply() ye bhi same .call() ki tarah ha bus function ki properties ko array main likhtey hain.

// 4) .bind() ye aik function return karta ha phir usko call kar saktey hain is key ilawa ye bhi this ki binding key liye use hota ha.