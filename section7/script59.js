// 59 - SUBMIT EVENTS

const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // looks at id for reference
    // also works with 'name'
    console.log(form.username.value);
})

// 61 - TESTING REGEX
const username = 'shusnp';
const pattern = /^[a-z]{6,}$/

let result = pattern.test(username);
// console.log(result);
if(result){
    console.log('the regex test passed :)')
} else {
    console.log("regex test failed :(")
}

// test username
let result2 = username.search(pattern);
console.log(result2);
// logs -1 for false the position of where the match is if true


// 62 - BASIC FORM VALIDATION