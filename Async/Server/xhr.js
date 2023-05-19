const requestURL = 'https://jsonplaceholder.typicode.com/users';

// xch = cml http request

const xhr = new XMLHttpRequest();

xhr.open('GET',requestURL )

xhr.responseType = 'json';

let obj = xhr.response;

console.log(obj);
xhr.send();
