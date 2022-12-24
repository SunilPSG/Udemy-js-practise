// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
// if its an array it will say true if not false
val = Array.isArray(numbers);
// Get single value
// where the 4th value will be displayed ,because the value counting starts from 0,1,2,3,4
val = numbers[3];
val = numbers[0];
// Insert into array
// to insert the value in second place we use [2] and the 100 is the value
numbers[2] = 100;
// Find index of value
// to find the value of index value of 36 where it stands
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end where push is used to add the number to an end.
numbers.push(250);
// // Add on to front where unshift is used to add the number at the begning.
numbers.unshift(120);
// // Take off from end to take away the last value we will be using pop.
numbers.pop();
// // Take off from front to take away the first value we will be using shift key.
numbers.shift();
// // Splice values to take away the value from 2nd to 4th we use splice.
numbers.splice(1,3);
// // Reverse // to reverse the order we use the reverse.
numbers.reverse();

// Concatenate array
// so b y using this we can add number array and number2 array both to geather.
val = numbers.concat(numbers2);

// Sorting arrays
// sorthig means arranging the value in alphabitical order.
val = fruit.sort();
// val = numbers.sort();


// this is a function used to order the number from assending order.
// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// this is a function used to order the numbers in decending order.
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
// this is a function used to find the number which is greater than 50.
function over50(num){
  return num > 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);
