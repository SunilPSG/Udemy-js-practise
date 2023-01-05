const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item){
    // console.log(item.className);
    item.textContent =` hay`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background ="#ccc";
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background ="#f4f4f4";
}
console.log(items);
