





// //adding the new fruit to the list
// const form = document.querySelector('form') ;
// //selecting the class of fruits of UL using queryselector, bcz we will append created element in that form parallel to existing element
// const fruits = document.querySelector('.fruits');

// form.addEventListener('submit',function(event){
// event.preventDefault();
//  //select the input element
// const fruitToAdd = document.getElementById('fruit-to-add');
// // Created the Li for fruit
//         const newLi = document.createElement('li');
//         // const newLiText=document.createTextNode(fruitToAdd.value);
//         // newLi.appendChild(newLiText);
//         ////setting the fruit class
//         newLi.className='fruit';

 

     
//       newLi.innerHTML=fruitToAdd.value  +'<button class="delete-btn">x</button>';
//       // Adding Li as the tost element of unordered list
//         fruits.appendChild(newLi);
// })


// //creating input feild for description
// const inputElement = document.createElement('input');

// // Set attributes and properties for the input element
// inputElement.type = 'text';
// inputElement.id = 'description';
// inputElement.placeholder = 'Enter your text';
// inputElement.style.fontStyle='italic';
// // Find the parent element where you want to insert the input element
// const parentElement = document.getElementsByTagName('button');

// // Insert the input element at a specific position using insertBefore()
// // This example inserts the input element before the second child element of the parent
// const secondChild = parentElement.children[1];
// parentElement.insertBefore(inputElement, secondChild);





// //filter fruit name from video
// const filter =document.getElementById("filter");
// filter.addEventListener("keyup",function(event){
//     const textEntered=event.target.value.toLowerCase();
//     const fruitsItems=document.getElementsByClassName("fruit");
//     for(let i=0;i<fruitsItems.length;i++){
//         const currentFruitText=fruitsItems[i].firstChild.textContent.toLowerCase();
// if(currentFruitText.indexOf(textEntered)===-1){
//     fruitsItems[i].style.display="none";
// }
// else{
//     fruitsItems[i].style.display="flex";
// }
//     }
// });

//function to filter description