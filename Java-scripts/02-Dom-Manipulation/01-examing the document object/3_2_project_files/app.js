let val;
// where all the page will be selected.
val = document;
// document.all where all the tags will be displayed.
val = document.all;
// this is used to select the 3rd tag which starts from 0.
val = document.all[2];
// this shows the length like number of tags used in the page.
val = document.all.length;
// hear the head tag will be selected.
val = document.head;
// same way the body tag will be selected
val = document.body;
// hear the doctype which means whole page will be selected.
val = document.doctype;
// domin where the search path will be showm, without https url will be shown.
val = document.domain;
// hear the entire url will be shown.
val = document.URL;
val = document.characterSet;
// contenttype will show the content.this is a html page so it will show html.
val = document.contentType;


// this will select the form in the page.
val = document.forms;
// this will help us to select the 1st form in the page.
val = document.forms[0];
// .id helps to select the id in the first form.
val = document.forms[0].id;
// this shows the method like -> get,post,push etc.
val = document.forms[0].method;
// action is used to find out the action tag in the page.
val = document.forms[0].action;


// document.link is used to take or select the link tag in the page.
val = document.links;
// this [0] helps in getting the first link in the page.
val = document.links[0];
// this .id helps in getting the id under link.
val = document.links[0].id;
// this .class name helps in getting the class name inside the link.
val = document.links[0].className;
// .classlist helps in getting the all the class list in the page
val = document.links[0].classList[0];


// this is used to get a img tag in the page.if we dont have any img it will show [].
val = document.images;

// this will take us to script tag in the page.
val = document.scripts;
// this helps to take the script tag inside that attribute like {src,alt etc}
val = document.scripts[2].getAttribute('src');


// 
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);