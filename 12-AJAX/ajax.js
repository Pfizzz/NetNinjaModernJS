const getTodos = (callback) => {
  // create a new request object
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    // fire this off if the state has reached 4 (done):
    if (request.readyState === 4 && request.status === 200) {
    //   console.log(request.responseText);
    // parse() takes a JSON string and converts it into objects we can use in code.
        const data = JSON.parse(request.responseText)
      callback(undefined, data);
    } else if (request.readyState === 4) {
    //   console.log("could not fetch the data");
      callback('could not fetch data', undefined);
    }
  });
  // first argument is the type of request (GET, PUT, POST, DELETE), second argument is the endpoint.
  // https://jsonplaceholder.typicode.com/todos/
  // same logic for local endpoints "todos.json"
  request.open("GET", "todos.json");
  request.send();
};

// getTodos((err, data) => {
//     console.log('callback fired');
//     // console.log(err, data);
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// promise example