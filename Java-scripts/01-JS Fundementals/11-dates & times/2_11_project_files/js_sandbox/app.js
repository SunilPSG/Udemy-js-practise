let val;
// new date is used to get todays date if we use () and blank in the brackets we will gwr todays date
const today = new Date();
// hear the given data in the () will be printed 
// out put :9-10-1981 11:25:00
// these are the ways to print the date like (1-1-2000 , sep 10 1998 , 09/10/24)
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');
// this is used to get the month of present month.
val = today.getMonth();
// this is used to get the present date.
val = today.getDate();
// this is used to get present day.
val = today.getDay();
// this is used to get the pesent year.
val = today.getFullYear();
// this is used to get the persent hour.
val = today.getHours();
// this gives the present minute.
val = today.getMinutes();
// this gives us the second.
val = today.getSeconds();
// this helps to give the present milisecond
val = today.getMilliseconds();
// this helps to give the time of the persent year
val = today.getTime();

// set is used to chane the birthday date,time,year and every thing. 

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);