

// // Create the input element
// const inputElement = document.createElement('input');

// // Set attributes and properties for the input element
// inputElement.type = 'text';
// inputElement.id = 'new-input';
// inputElement.placeholder = 'Enter your text';
// inputElement.style.fontStyle='italic';
// // Find the parent element where you want to insert the input element
// const parentElement = document.getElementsByTagName('button');

// // Insert the input element at a specific position using insertBefore()
// // This example inserts the input element before the second child element of the parent
// const secondChild = parentElement.children[1];
// parentElement.insertBefore(inputElement, secondChild);





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




//Bard code

const fruitsList = document.querySelector('.fruits');
const filterInput = document.getElementById('filter');
const fruitToAddInput = document.getElementById('fruit-to-add');
const fruitDescriptionInput = document.createElement('input'); // Create new input for description

// Set attributes for the new description input
fruitDescriptionInput.id = 'description';
fruitDescriptionInput.type = 'text';
fruitDescriptionInput.placeholder = 'Enter fruit description';

// Insert the new input before the submit button
const submitButton = document.querySelector('button');
submitButton.parentNode.insertBefore(fruitDescriptionInput, submitButton);

// Function to show fruit description
function showFruitDescription(fruit, description) {
  const li = document.createElement('li');
  li.classList.add('fruit');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = fruit;
  li.appendChild(nameSpan);

  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.style.fontStyle = 'italic';
  descriptionParagraph.textContent = description;
  li.appendChild(descriptionParagraph);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'x';
  deleteButton.addEventListener('click', () => {
    fruitsList.removeChild(li);
  });
  li.appendChild(deleteButton);

  fruitsList.appendChild(li);
}

// Add fruit to list with description
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const fruit = fruitToAddInput.value;
  const description = fruitDescriptionInput.value;

  if (fruit && description) {
    showFruitDescription(fruit, description);
    fruitToAddInput.value = '';
    fruitDescriptionInput.value = '';
  } else {
    alert('Please enter both fruit name and description');
  }
});

// Filter fruits based on name or description
filterInput.addEventListener('keyup', () => {
  const filterText = filterInput.value.toLowerCase();
  const fruits = fruitsList.querySelectorAll('.fruit');

  fruits.forEach((fruit) => {
    const name = fruit.querySelector('span').textContent.toLowerCase();
    const description = fruit.querySelector('p').textContent.toLowerCase();
    const isVisible = name.includes(filterText) || description.includes(filterText);
    fruit.style.display = isVisible ? 'block' : 'none';
  });
});




const filter =document.getElementById("filter");
filter.addEventListener("keyup",function(event){
    const textEntered=event.target.value.toLowerCase();
    const fruitsItems=document.getElementsByClassName("fruit");
    for(let i=0;i<fruitsItems.length;i++){
        const currentFruitText=fruitsItems[i].firstChild.textContent.toLowerCase();
if(currentFruitText.indexOf(textEntered)===-1){
    fruitsItems[i].style.display="none";
}
else{
    fruitsItems[i].style.display="flex";
}
    }
});


const filterdiscription = document.getElementById("description");
filter.addEventListener("keyup",function(event){
    const textEntered=event.target.value.toLowerCase();
    const fruitsItems=document.getElementsByClassName("fruit");
    for(let i=0;i<fruitsItems.length;i++){
        const currentFruitText=fruitsItems[i].firstChild.textContent.toLowerCase();
if(currentFruitText.indexOf(textEntered)===-1){
    fruitsItems[i].style.display="none";
}
else{
    fruitsItems[i].style.display="flex";
}
    }
});
localStorage.setItem()