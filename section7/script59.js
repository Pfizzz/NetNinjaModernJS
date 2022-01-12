// 59 - SUBMIT EVENTS

const form = document.querySelector(".signup-form");
const feedback = document.querySelector('.feedback');
const userPattern = /^[a-zA-Z]{6,12}$/;

// const username = document.querySelector('#username');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(username.value);
  // looks at id for reference
  // also works with 'name'
  console.log(form.username.value);

  // 62 BASIC FORM VALIDATION
  const user = form.username.value;

  if(userPattern.test(user)){
      //feedback good info
      feedback.textContent= "that username is valid";
  } else {
      // feedback bad ino
      feedback.textContent= "Username must be letters onle and be between 6-12 characters long"
  }
});

// live feedback / keyup event
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if(userPattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
})





// 61 - TESTING REGEX
const username = "shusnp";
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username);
// console.log(result);
if (result) {
  console.log("the regex test passed :)");
} else {
  console.log("regex test failed :(");
}

// test username
let result2 = username.search(pattern);
console.log(result2);
// logs -1 for false the position of where the match is if true
