// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// to get a alert notification
//alert('Hello World');

// Prompt
// to get a alert type box at the top of the page
// const input = prompt();
// alert(input);

// Confirm
// this is to get a pop up mgs on top 
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width
// to know the window height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
// to know the inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
// to know the scroll height and width of the page.
// y belongs to y axis 
val = window.scrollY;
// x belongs to x axis
val = window.scrollX;

// Location Object
// helps to know the details abot the port, host etc
val = window.location;
// location.hostname helps to know the host name 
val = window.location.hostname;
// location.port helps to know the port name.
val = window.location.port;
//href helps to know the path of the page
val = window.location.href;
// search helps to know the url path.
val = window.location.search;

// Redirect
// this is used to REDIRECT the page to google. 
//window.location.href = 'http://google.com';
//Reload
// this is used to reload the page continously.
//window.location.reload();

// History Object

// this is used togo back to the previous page 
// window.history.go(-2);

// history length is nothing but to check the lenght of the history of pages.
// val = window.history.length;

// Navigator Object
// navigator is a actuall browser like crome ,edge ,fire-fox.
val = window.navigator;
// to get app name 
val = window.navigator.appName;
// to get app version
val = window.navigator.appVersion;
// this is to know the generation 
val = window.navigator.userAgent;
// to know operating system 
val = window.navigator.platform;
// to know the vendorS
val = window.navigator.vendor;
// to know the language used in the page.
val = window.navigator.language;



console.log(val);
