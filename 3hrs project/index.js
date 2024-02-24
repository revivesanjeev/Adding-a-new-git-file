
// // Adding and creating element and showing it on screen
// const form = document.querySelector('form');
// const lists = document.querySelector('.lists');

// // Function to add a new list item
// function addListItem(expense, description, category) {
//     const newLi = document.createElement('li');
//     newLi.className = 'list';
//     newLi.innerHTML = `${expense} - ${description} - ${category} <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button>`;
//     lists.appendChild(newLi);
// }

// // Function to load user details from localStorage
// function loadUserDetails() {
//     for (let i = 0; i < localStorage.length; i++) {
//         const expe = localStorage.key(i);
//         const userDetails = JSON.parse(localStorage.getItem(expe));
//         addListItem(userDetails.expensef, userDetails.descriptionf, userDetails.categoryf);
//     }
// }

// // Load existing user details when the page loads
// document.addEventListener('DOMContentLoaded', loadUserDetails);

// // Form submission event listener
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const expensef = document.getElementById('expense');
//     const descriptionf = document.getElementById('description');
//     const categoryf = document.getElementById('category');
    
//     const expe = expensef.value;

//     addListItem(expensef.value, descriptionf.value, categoryf.value);

//     let userDetails = {
//         expensef: expensef.value,
//         descriptionf: descriptionf.value,
//         categoryf: categoryf.value
//     };
    
//     localStorage.setItem(expe, JSON.stringify(userDetails));
// });

// // Delete and Edit functionality
// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('delete-btn')) {
//         const userToDelete = event.target.parentElement;
//         const expe = userToDelete.textContent.split(' - ')[0].trim();
//         localStorage.removeItem(expe);
//         userToDelete.remove();
//     }
//     else if (event.target.classList.contains('edit-btn')) {
//         const expe = event.target.parentElement.textContent.split(' - ')[0].trim();
//         const userDetails = JSON.parse(localStorage.getItem(expe));
//         if (userDetails) {
//             document.getElementById('expense').value = userDetails.expensef;
//             document.getElementById('description').value = userDetails.descriptionf;
//             document.getElementById('category').value = userDetails.categoryf;
//         }
//     }
// });



/////////////////////////////////////////////////////////////////////////////////////



//adding and creating element and shoeing it on screen
const form=document.querySelector('form');
const lists=document.querySelector('.lists');
//function to add a new lists
function addListItem(expense,description,category){
    //creating the element and append it to the dom
    const newLi=document.createElement('li');
    newLi.className='list';
    newLi.innerHTML=`${expense}-${description}-${category} <button class="delete-btn">Delete</button><button class="edit-btn">Edit</button>`;
    lists.appendChild(newLi);}
//function to load user from local storage
function loadUserDetails(){
    for(let i=0;i<localStorage.length;i++){
        const expe=localStorage.key(i);
        const userDetails=JSON.parse(localStorage.getItem(expe));
        //calling addlistitem ,it can add item in document from local storage
        addListItem(userDetails.expensef,userDetails.descriptionf,userDetails.categoryf);
    }
}

//load existing user details when the page loads
document.addEventListener('DOMContentLoaded',loadUserDetails);

//form submission event listener
form.addEventListener('submit',function(event){
    event.preventDefault();
    //selecting the input field
    const expensef=document.getElementById('expense');
    const descriptionf=document.getElementById('description');
    const categoryf=document.getElementById('category');


    const expe=expensef.value;

    addListItem(expensef.value,descriptionf.value,categoryf.value);


    //getting the user details value
    let userDetails={
        expensef:expensef.value,
        descriptionf:descriptionf.value,
        categoryf:categoryf.value};

    //adding item to local storage
    localStorage.setItem(expe,JSON.stringify(userDetails));
});

//adding delete and edit funtionality 
document.addEventListener('click',function(event){
    //when delete-btn is found perform delete functionality
    if(event.target.classList.contains('delete-btn')){
          const userToDelete=event.target.parentElement;
          //trim key present in local storage
          const expe=userToDelete.textContent.split('-')[0].trim();
          //remove it from local storage 
          localStorage.removeItem(expe);
          //remove parent element from dom (i.e screen )
          userToDelete.remove();
        }

   else if(event.target.classList.contains('edit-btn')){
    //when find edit-btn perform edit-btn
        const expe=event.target.parentElement.textContent.split('-')[0].trim();//trim the key
        const userDetails=JSON.parse(localStorage.getItem(expe));//get that key from local storage 
        if(userDetails){//now move all the element with same key from local storage to input field

            document.getElementById('expense').value = userDetails.expensef;
            document.getElementById('description').value = userDetails.descriptionf;
            document.getElementById('category').value = userDetails.categoryf;}

    }
})
