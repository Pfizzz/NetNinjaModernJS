const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // looks at id for reference
    // also works with 'name'
    console.log(form.username.value);
})