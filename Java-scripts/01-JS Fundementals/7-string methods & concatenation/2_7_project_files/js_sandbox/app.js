const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
// whereit helps in giving space between the 1st and last name 
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';
// hear it helps to add the first name and the age in the blue colored word 
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
// escaping is nothing where we can use "" for printing the because the string should be inside the ''
// in other way we can use / before the ' to avoid errors
val =  'That\'s awesome, I can\'t wait';
val =  'That\'s awesome, I can\'t wait';

// Length
// where it shows the first name and then number of letters
val = firstName.length;

// concat()
// concat is noting but same as Concatenation 
val = firstName.concat(' ', lastName);

// Change case
// to change the text to uppercase
val = firstName.toUpperCase();
// to change the text to lower case
val = firstName.toLowerCase();


// it helps in knowing the letter which is in the first name it starts from 0,1,2
val = firstName[2];

// indexOf()
// even this is same where it shows the index value from first for ex
// if l is in 3rd place in williams so the value will be 2 where it starts from 0,1,2
val = firstName.indexOf('l');
// this is same as first one where lastindex comes from last to first.
val = firstName.lastIndexOf('l');

// charAt()
// charAt is nothing but as same as index where it shows the character where the value stands for
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
// substring where we can get from the first value to the 4th value starts from 0 -4
val = firstName.substring(0, 4);

// slice()
// slice is also same as substring even it starts from 0 and ends to 4
val = firstName.slice(0,4);
// hear negative value is given to take the last 3 words
val = firstName.slice(-3);

// split()
// where it helps to split the words and show in string
// spliting will be done where ever the space is given
val = str.split(' ');
// hear spliting is done based on the ,
val = tags.split(',');

// replace()
// hear replace is used to replace the word or string in the below case from brad to jack
val = str.replace('Brad', 'Jack');

// includes()
// which gives true or false if the word is there in the given value it shows true if not false
 

console.log(val);