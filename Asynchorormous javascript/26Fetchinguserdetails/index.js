
function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,};

  axios
    .post(
      "https://crudcrud.com/api/b71bff1a8e3d45c48507c1a2ca3686c8/userdetails",
      userDetails)
  .then((response) => displayUserOnScreen(response.data))
  .catch((error) => console.log(error));
  displayUserOnScreen(userDetails);
  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";}






//passing userDetails as argument to displayUserOnScreen 
// function displayUserOnScreen(userDetails) {
//   //creating the li element to append 
//   const userItem = document.createElement("li");
//   //inserting the text into the li element 
//   userItem.appendChild(
//     document.createTextNode(
//       `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
//     )
//   );


// //after creation of text node delete button also inserted the appended li element 
//   const deleteBtn = document.createElement("button");
//   deleteBtn.appendChild(document.createTextNode("Delete"));
//   userItem.appendChild(deleteBtn);

//   const editBtn = document.createElement("button");
//   editBtn.appendChild(document.createTextNode("Edit"));
//   userItem.appendChild(editBtn);

//   const userList = document.querySelector("ul");
//   userList.appendChild(userItem);

//   deleteBtn.addEventListener("click", function (event) {
//     userList.removeChild(event.target.parentElement);
//     localStorage.removeItem(userDetails.email);
//   });

//   editBtn.addEventListener("click", function (event) {
//     userList.removeChild(event.target.parentElement);
//     localStorage.removeItem(userDetails.email);
//     document.getElementById("username").value = userDetails.username;
//     document.getElementById("email").value = userDetails.email;
//     document.getElementById("phone").value = userDetails.phone;
//   });
// }



// printing userDetails on screen using inner html
function displayUserOnScreen(userDetails) {
const userList = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerHTML = `${userDetails.username}-${userDetails.email}-${userDetails.phone} <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button>`;
userList.appendChild(newLi);

  // Adding event listeners for delete and edit buttons
  const deleteBtn = newLi.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
  localStorage.removeItem(userDetails.email);
  newLi.remove();
  });
  const editBtn = newLi.querySelector(".edit-btn");
  editBtn.addEventListener("click", function () {
  newLi.remove();
  document.getElementById("username").value = userDetails.username;
  document.getElementById("email").value = userDetails.email;
  document.getElementById("phone").value = userDetails.phone;}
  );}




 window.addEventListener("DOMContentLoaded", () => {
   axios
     .get(
       "https://crudcrud.com/api/b71bff1a8e3d45c48507c1a2ca3686c8/userdetails"
     )
     .then((response) => {
       console.log(response);
       for (var i = 0; i < response.data.length; i++) {
         displayUserOnScreen(response.data[i]);
       }
     })
     .catch((error) => {
       console.log(error);
     });
 });



// Do not touch code below
module.exports = handleFormSubmit;
