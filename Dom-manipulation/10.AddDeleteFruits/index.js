//selecting the form tag using the querySelector
const form = document.querySelector('form') ;
//selecting the class of fruits of UL using queryselector, bcz we will append created element in that form parallel to existing element
const fruits = document.querySelector('.fruits');

form.addEventListener('submit',function(event){
event.preventDefault();
 //select the input element
const fruitToAdd = document.getElementById('fruit-to-add');
// Created the Li for fruit
        const newLi = document.createElement('li');
        // const newLiText=document.createTextNode(fruitToAdd.value);
        // newLi.appendChild(newLiText);
        ////setting the fruit class
        newLi.className='fruit';

 //created a delete button to be added inside li
 ////creating the button element 
          // const deleteBtn=document.createElement('button');
//creating the textnode that will contain the text of button element 
          // const deleteBtnText=document.createTextNode('X');
////insert the deleteBtnText into deleteBtn Element
          // deleteBtn.appendChild(deleteBtnText);
 ////setting the class of delete-btn deleteBtn          
          // deleteBtn.className='delete-btn';
          // newLi.appendChild(deleteBtn);

      //both li and delete element can be added in one line using innerhtml
      newLi.innerHTML=fruitToAdd.value  +'<button class="delete-btn">x</button>';
      // Adding Li as the tost element of unordered list
        fruits.appendChild(newLi);
})


      
//function to remove added fruits 
   fruits.addEventListener('click',function(event)
    {if(event.target.classList.contains('delete-btn')){
      const fruitToDelete = event.target.parentElement;
      fruits.removeChild(fruitToDelete);};});



    // const existingFruits = document.querySelectorAll('.fruit');
    // existingFruits.forEach(function(fruit) {
    //   const editBtn = document.createElement('button');
    //   const editBtnText = document.createTextNode('Edit');
    //   editBtn.appendChild(editBtnText);
    //   editBtn.className = 'edit-btn';
    //   fruit.appendChild(editBtn);
    // });


    //loop to insert edit button 
    const existingFruits = document.querySelectorAll('.fruit');
existingFruits.forEach(function(fruit) {
  fruit.innerHTML += '<button class="edit-btn">Edit</button>';
});















// const form = document.querySelector('form');
// const fruits = document.querySelector('.fruits');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const fruitToAdd = document.getElementById('fruit-to-add');
//   const newLi = document.createElement('li');
//   newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>';
//   fruits.appendChild(newLi);
//   addEditButton(newLi); // Call function to add "Edit" button to the newly created element
// });

// fruits.addEventListener('click', function(event) {
//   if (event.target.classList.contains('delete-btn')) {
//     const fruitToDelete = event.target.parentElement;
//     fruits.removeChild(fruitToDelete);
//   }
// });

// function addEditButton(element) {
//   const editBtn = document.createElement('button');
//   editBtn.textContent = 'Edit';
//   editBtn.className = 'edit-btn';
//   element.appendChild(editBtn);
// }

// // This part will add the "Edit" button to existing fruits
// const existingFruits = document.querySelectorAll('.fruit');
// existingFruits.forEach(addEditButton);
