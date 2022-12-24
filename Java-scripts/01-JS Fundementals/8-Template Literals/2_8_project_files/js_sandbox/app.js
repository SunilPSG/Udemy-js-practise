const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)
// this is a older method of doing things
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';
 document.body.innerHTML = html; 

// this is nithing but a function which we will be going to learn later
function hello(){
  return 'hello';
}

// With template strings (es6)
// this is a latest way of doing things
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;