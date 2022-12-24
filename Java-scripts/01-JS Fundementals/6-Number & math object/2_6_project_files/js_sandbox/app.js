const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
// by using math pi some digit of number will be shown it is 3.141592653589793 
val = Math.PI;
// same even hear the same will be shown like 2.718281828459045
val = Math.E;
// math.round is used to round off the value.in this case the out put will be 2.
val = Math.round(2.4);
// math.cell is used to just take away the 2.4 and out put will be 3 it just rounds up the value for a smaller value
val = Math.ceil(2.4);
// math.floor is used to round up for a next value with out the decimile even though the decimile value is less than 0.5
val = Math.floor(2.8);
// math.sqrt is used to make a square root of the value.
val = Math.sqrt(64);
// this math.abs is used to make the negative value to positive value
val = Math.abs(-3);
// pow is nothing but where it helps to make a square root or cube 
// first value shows the value of number and the second will show the number of times the value should be calculated weather its sq root or cube 
val = Math.pow(8, 2);
// hear math.min help to find out the min value in the given data
val = Math.min(2,33,4,1,55,6,3,-2);
// haer math.max helps to find out the max vale in the given data
val = Math.max(2,33,4,1,55,6,3,-2);
// math.random means where it gives us a random number
val = Math.random();
// this is used where the random will numbers will be selecting under 20 and above 1
// math floor is used to make a round off for the value

val = Math.floor(Math.random() * 20 + 1);

console.log(val);