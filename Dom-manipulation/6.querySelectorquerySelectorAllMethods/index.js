const mainheading=document.querySelector('#main-heading');
mainheading.style.textalign='centre';
const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px ';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';

const basketHeading=document.querySelector('h2');
basketHeading.style.marginLeft='30px';
// basketHeading.style.backgroundColor='brown';

basketHeading.style.color='brown';

const fruitItems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++){
  fruitItems[i].style.backgroundColor='white';
  fruitItems[i].style.padding='10px ';
fruitItems[i].style.margin='10px';
fruitItems[i].style.borderRadius='5px';
// }
const OddFruitsItems=document.querySelectorAll('.fruit:nth-child(odd)')
// Write answer to the questions asked below:
for(let i=0;i<OddFruitsItems.length;i++){
  OddFruitsItems[i].style.backgroundColor='lightgray';
}

const EvenFruitsItems=document.querySelectorAll('.fruit:nth-child(even)')
// Write answer to the questions asked below:
for(let i=0;i<EvenFruitsItems.length;i++){
  EvenFruitsItems[i].style.backgroundColor='brown';
  EvenFruitsItems[i].style.color='white';
}}