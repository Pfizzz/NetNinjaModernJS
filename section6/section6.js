// // 46- query sleector

// const para = document.querySelector('body > h1');
// // console.log(para);

// // query selecterall

// const paras = document.querySelectorAll('p');
// // console.log(paras);
// // gets the first element

// // we can use forEach on node lists
// // paras.forEach(para => {
// //     console.log(para);
// // })
// const errors = document.querySelectorAll('.error')
// // console.log(paras[2]);
// // console.log(errors);

// // 47 - other ways to query the dom
// // get an element by its id. we dont use # symbol here.
// const title = document.getElementById('page-title')
// console.log(title);

// //get elements by their class name
// const title2 = document.getElementsByClassName('error');
// console.log(title2);
// // prints an html collection
// console.log(title2[0]);

// const error1 = document.getElementsByClassName('error');
// console.log (error1[1])
// //cant use forEach on an html collection

// //get elements by their tag name
// const paras2 = document.getElementsByTagName('p');
// console.log(paras2);
// console.log(paras2[0])
// // refresh if on live server sometimes

// // 48 - adding and changing page content
// const para = document.querySelector('p');
// inner text property
// console.log(para.innerText);
// //OVERRIDES THE TEXT
// para.innerText = 'ninjas are awesome';
// //APPENDS THE TEXT
// para.innerText += ' and I am the queen of france';


//UPDATE TEXT
// const paras = document.querySelectorAll('p');
// // node list so we can use for each
// // will print the inner text of each p tag
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })

// //CHANGE THE HTML
// // const content =  document.querySelector('.content');
// // console.log(content.innerHTML);
// // // just use = to completely change the content
// // content.innerHTML += '<h2> Updated content</h2>';
// // console.log(content.innerHTML);

// // append html
// const content = document.querySelector('.content');
// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// })


// 49 GETTING AN ATTRIBUTE
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
// set attribute grabs the attribute and changes its value
link.setAttribute('href', 'http://www.yahoo.com')
link.innerText = 'yahoo';

const mssg = document.querySelector('p');
console.log(mssg);
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success')
console.log(mssg);

//SET AN ATTRIBUTE TO AN ELEMENT THAT DOESNT EXIST
mssg.setAttribute('style', 'color: green;')