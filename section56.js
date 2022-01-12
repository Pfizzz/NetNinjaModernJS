// MORE DOM EVENTS

// COPY EVENT
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log("oi you're copy my shit and i see you!")
})

// MOUSEMOVE EVENT
const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
})

//WHEEL EVENT
// find things in the properties when you log e
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})