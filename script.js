// let age = 20;
// let year = 1990;

// console.log(age, year);

// age = 30;

// console.log(age);

// let firstName = "Brandon";
// let lastName = "stark";

// let fullName = firstName + ' ' + lastName + ', ' + age;
// console.log(fullName);

// console.log("live!");

// console.log(firstName[0]);

// console.log(fullName.toUpperCase());

// console.log(`long live king ${fullName}`)

// console.log(true, false, "true", "false");

// let email = 'pfiste80@gmail.com';
// // let result = email.includes('@');
// // console.log(result);

// // let one = "michael";
// // console.log(one == "michael")

// // let test = String(10);
// // console.log(test, typeof test);

// // while loop
// // let names = ["mario", "luigi", "bowser"];
// // let i = 0;
// // while(i < names.length){
// //     console.log(names[i]);
// //     i++
// // }

// // // do while loop
// // let j = 3;
// // do{
// //     console.log('value of j is ', j)
// //     j++;

// // // } while (j < 5);

// // // if and else if
// // let password = "passss";
// // if (password.length > 12){
// //     console.log("great password!");
// // } else if (password.length > 5) {
// //     console.log("it's okay");
// // } else {
// //     console.log("do it again!");
// // }

// // console.log(!true);

// // // break and continue
// // const scores = [10, 0, 20, 35, 60, 15];
// // for (let i = 0; i < scores.length; i++){

// //     if(scores[i] === 0){
// //         continue;
// //     }
// //     console.log(scores[i]);
// //     if (scores[i] === 60){
// //         console.log("youve hit 60");
// //         break;
// //     }
// // }

// // switch statements

// // let grade = "E";

// // switch (grade) {
// //   case "A":
// //     console.log("You got an A!");
// //     break;
// //   case "B":
// //     console.log("You got a B!");
// //     break;
// //   case "C":
// //     console.log("You got a C!");
// //     break;
// //   case "D":
// //     console.log("You got a D!");
// //     break;
// //   case "F":
// //     console.log("You got an F!");
// //     break;
// //   default:
// //     console.log("Not a valid grade");
// // }

// // block scoping
// // var ignored block scoping, const and let do not
// // let age = 30;
// // var name = 'mike';
// // console.log(name);
// // if(true){
// //     var name = "shaun";
// //     console.log(age, name);

// // }

// // console.log(age, name);

// // function declaration
// function goat(){
//     console.log("goat!");
// }

// goat();

// const sheep = function() {
//     console.log("baa");
// }

// sheep();

// template literals
// const great = function(name="luigi", time="night"){
//     console.log(`Good ${time}, ${name}`)
// }

// great("mario", "morning");

// using return to write a function that calculates a circles area

// const calcArea = function(radius){
//     return 3.14 * radius**2;

// }
// const area = calcArea(5);
// console.log(area);

//same thing but with arrow functions
// const calcArea = radius => {
//     return 3.14 * radius**2;
// }
//  // OR
// const calcArea = radius => 3.14 * radius**2;

// const area= calcArea(5);
// console.log(`area is ${area}!`);

// ACTIVITY: CONVERT INTO ARROW FUNCTIONS
// const greet = function(){
//     return 'hello world'
// }
// console.log(greet());
// CONVERTS TO
// const greet = () => 'hello world';
// console.log(greet());

// const bill = function(products, tax){
//     let total = 0;
//     for (let i =0; i < products.length; i++){
//         total += products[i] + products[i] + tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));

//FUNCTIONS VS METHODS
// const name = 'mario';
// const greet = () => "hello";

// console.log(greet());

// let result = name.toUpperCase();
// console.log(result);

//CALLBACKS AND FOREACH

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// // myFunc(function(value){
// //     // do something
// //     console.log(value);
// // });

// // converted to arrow function
// myFunc(value => {
//     console.log(value);
// })


//FOR EACH

// let people = ['ryu', 'chun-li', 'mario', 'luigi'];

// const logPerson = (person, index) => {
//     console.log(`${index}, hello ${person}`)
// }

// people.forEach(logPerson);

// let dogs = ['chester', 'nova', 'layla', 'bruno'];
// const logDog = (dog, index) => {
//     console.log(`${index} We love ${dog}`)
// }

// dogs.forEach(logDog);
const ul = document.querySelector('.people');
const people = ['ryu', 'chun-li', 'mario', 'luigi'];
let html = ``;


people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;

});

console.log(html);
ul.innerHTML = html; 