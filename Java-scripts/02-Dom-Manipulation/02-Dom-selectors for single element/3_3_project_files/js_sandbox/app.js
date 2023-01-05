// this selects the element by id
// document.getElementById()

 
// hear task-title class will be selected
// console.log(document.getElementById('task-title'));

// // Get things from the element
// this is getting element by id 
// console.log(document.getElementById('task-title').id);
// this is getting element by class
// console.log(document.getElementById('task-title').className);


// ----------------------------------
// first we have to give const and then we can take directly like after this getdocumentby id.
// const taskTitle = document.getElementById('task-title')

// changing style 
// for changing style we can use .style
//document.getElementById('task-title').style.backgroung = 'black';

// // Change styling 
// document.getElementById
// --taskTitle.style.background = '#333';
// --taskTitle.style.color = '#fff';
// --taskTitle.style.padding = '5px';
// --taskTitle.style.display = 'none';

// // Change content
// to change the content in the html we use textcontent
// hear the task will be changed to task list.

// document.getElementById('task-title').textContent ="task list";
// taskTitle.textContent = 'Task List';
// innertext is also same where the content changes.
// taskTitle.innerText = 'My Tasks';
// innerhtml is to add the html to the existing code.
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
// querySelector is nothing but where we can select any thing it can be html or css

// hear  # is given so that we can select the element by ID
console.log(document.querySelector('#task-title'));
// // hear  . is given so that we can select the element by class
console.log(document.querySelector('.card-title'));
// hear  h5 is given so that we can select the element by html tag
console.log(document.querySelector('h5'));

// hear ui will be selected and that to only the first one will be changed.
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

// hear the selection is made using the sudo-selectors.hear only one element can be selected.
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




