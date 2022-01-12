//50 CHANGING CSS STYLES
// do not use setAttribute!
const title = document.querySelector('h1');
//style is a property of title
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
//delete a style
title.style.margin = '';


//51 ADDING AND REMOVING CLASSES
const content = document.querySelector('p');
// classList is a property
console.log(content.classList);
// add a class
content.classList.add('error');
// remove a class
content.classList.remove('error');
content.classList.add('success');

// toggle method
const title2 = document.querySelector('.title');
// this gives it class of test
title2.classList.toggle('test');
// toggling again will remove the class
title2.classList.toggle('test');

//52 PARENTS CHILDREN AND SIBLINGS
// NODE RELATIONS
// remember we caznnot use forEach() on an html collection
const article = document.querySelector('article');
console.log(article.children);
// change the html collection into an array (does not alter original html collection):
console.log(Array.from(article.children));
// now we can use forEach()

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
})

// log parent element
const title3 = document.querySelector('h2');
console.log(title3.parentElement);
console.log(title3.parentElement.parentElement);
//sibling
console.log(title3.nextElementSibling);
console.log(title3.previousElementSibling)

// chaining
console.log(title3.nextElementSibling.parentElement.children)