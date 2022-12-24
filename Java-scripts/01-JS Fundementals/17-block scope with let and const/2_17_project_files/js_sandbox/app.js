// Global Scope
var a = 1;
let b = 2;
const c = 3;

//console.log('Global Scope: 'a ,b ,c );
// out-put will be 

// Global Scope: a ,b ,c .
// ---------------------------------------

// function test is used to bring the last things in the output like 4,5,6
// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();


// out-put will be 
// Function Scope:  4 5 6
// -------------------------------------------------------------
// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// out-put will be 
// If Scope:  4 5 6
// -----------------------------------------------
for(let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);