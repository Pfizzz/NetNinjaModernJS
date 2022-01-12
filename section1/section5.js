// // object literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'Berlin',
//     blogs: ['Turtle Life', '10 Things I hate about FarCry']
// };

// console.log(user);

// console.log(user.name);
// user.age = 35;
// console.log(user.age);
// // can also be used with bracet notations
// console.log(user['name'])
// user['name'] = 'chun-li';
// console.log(user['name'])

// console.log(user);

// // will log Berlin
// const key = 'location';

// console.log(user[key])

// console.log(typeof user)

//ATTACHING METHODS TO OBJECT
// methods are functions defined on an object

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'Berlin',
//     blogs: ['Turtle Life', '10 Things I hate about FarCry'],
//     login: function(){
//         console.log("The user is logged in");
//     },
//     logout: () => {
//         console.log("The user is logged out");
//     }
// };

// user.login();
// user.logout();

// 40 - THIS KEYWORD
// // cant use arrow functions when using this
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'Berlin',
//     blogs: ['Turtle Life', '10 Things I hate about FarCry'],
//     login: function(){
//         console.log("The user is logged in");
//     },
//     logout: () => {
//         console.log("The user is logged out");
//     },
//     logBlogs: function() {
//         // this refers to the user object
//         // console.log(this.blogs);
//         console.log('This user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog)
//         })
//     }
// };
// user.logBlogs();
// console.log(this);

// these functions can also be written this way:
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'Berlin',
//     blogs: ['Turtle Life', '10 Things I hate about FarCry'],
//     login(){
//         console.log("The user is logged in");
//     },
//     logout(){
//         console.log("The user is logged out");
//     },
//     logBlogs(){
//         // this refers to the user object
//         // console.log(this.blogs);
//         console.log('This user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog)
//         })
//     }
// };
// user.logBlogs();
// console.log(this);

//STORING OBJECTS IN ARRAYS
// const blogs = [
//     { title: 'Turtle Life', likes: 30 },
//     { title: '10 Things I love about Farcry', likes: 50 }
// // ];

// // console.log(blogs);
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'Berlin',
//     blogs: [
//         { title: 'Turtle Life', likes: 30 },
//         { title: '10 Things I love about Farcry', likes: 50 }
//     ],
//     login(){
//         console.log("The user is logged in");
//     },
//     logout(){
//         console.log("The user is logged out");
//     },
//     logBlogs(){
//         // this refers to the user object
//         // console.log(this.blogs);
//         console.log('This user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes)
//         })
//     }
// };
// user.logBlogs();
// console.log(this);

// 42- THE MATH OBJECT
console.log(Math);
console.log(Math.PI);
console.log(Math.E);    
const area = 7.7;
//round rounds the number to the nearest integer, rounds to 8
console.log(Math.round(area)); 
// floor rounds the number down to the closest integer, prints 7
console.log(Math.floor(area))
// ceil rounds the number up
console.log(Math.ceil(area))
// trunc takes away the decimal and leaves the integer
console.log(Math.trunc(area))

// random numbers
const random = Math.random();
console.log(random)
// to print larger random numbers
console.log(Math.round(random * 100))

// primitive verses reference types
// primitive types are stored on the stack, reference types are stored on the heap

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

scoreOne = 60;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)
//scoreOne prints 60, but scoreTwo is still 50.

//reference types
let userOne = { name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userTwo.age = 40;

console.log(userOne, userTwo)