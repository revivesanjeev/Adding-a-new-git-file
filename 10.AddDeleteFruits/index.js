// Add the Edit Button:
// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form' ) ;
const fruits = document.querySelector('.fruits');
form.addEventListener('submit',function(event){
event.preventDefault();
 
  const fruitToAdd = document.getElementById('fruit-to-add');
// Created the Li
const newLi = document.createElement('li') ;
  newLi.innerHTML=fruitToAdd.value  +'<button class="delete-btn">x</button>';
  // Adding Li as the tost element of unordered list
  fruits.appendChild(newLi);
})
   fruits.addEventListener('click',function(event)
    {if(event.target.classList.contains('delete-btn')){
const fruitToDelete = event.target.parentElement;
      fruits.removeChild(fruitToDelete);
      };
     });
