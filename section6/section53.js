// EVENTS

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log("you cliked me")
// })

const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e =>{
//         // console.log("item clicked")
//         // console.log(e);
//         // either works here
//         console.log(e.target);
//         console.log(item);
//         e.target.style.textDecoration = 'line-through';
//     })
// })

// 54 DELETE AND ADD ELEMNTS TO DOM
// removes from website
const ul = document.querySelector('ul');
// ul.remove();

//APPEND AND PREPEND
const button = document.querySelector('button');
button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // ul.append(li);
    
    // i did this on my own, but we should use event delegation
    // li.addEventListener('click', e => {
    //         e.target.remove();
    //     })
    ul.prepend(li);
})
// removesd items when clicked
// items.forEach(item => {
//     item.addEventListener('click', e =>{
//         // stops event bubbling
//         e.stopPropagation();
//         e.target.remove();
//     })
// })
ul.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})