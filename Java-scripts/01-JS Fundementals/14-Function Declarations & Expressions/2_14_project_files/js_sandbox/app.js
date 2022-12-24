// FUNCTION DECLARATIONS




// const name = 'sunil';
// function skc(){
//   // console.log(`hello ${name}`);
//   return"hello";
// }
// console.log(skc());


// this is es6 method
function greet(firstName = 'John', lastName = 'Doe'){
  // this is a es5 method 
  // function greet(firstName, lastName){
  // this is a older method of doing things
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());




// FUNCTION EXPRESIONS

const square = function(x = 3){
  return x*x;
};

// console.log(square());





// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Brad');






// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();
