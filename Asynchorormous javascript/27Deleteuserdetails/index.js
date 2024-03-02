function handleFormSubmit(event) {
  event.preventDefault();

  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  axios
    .post(
      "https://crudcrud.com/api/b7aac16c348d48469397bdbe291c7904/detail",
      userDetails
    )
    .then((response) => {
      const createdUserDetails = response.data;
      displayUserOnScreen(createdUserDetails);
    })
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}





// Printing userDetails on screen using inner HTML
function displayUserOnScreen(userDetails) {
  const userList = document.querySelector("ul");
  const newLi = document.createElement("li");
  newLi.innerHTML = `${userDetails.username}-${userDetails.email}-${userDetails.phone} <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button>`;
  userList.appendChild(newLi);

  // Adding event listeners for delete and edit buttons
  const deleteBtn = newLi.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    axios
      .delete(
        `https://crudcrud.com/api/b7aac16c348d48469397bdbe291c7904/detail/${userDetails._id}`
      )
      .then(() => {
        console.log("User detail deleted successfully");
        newLi.remove();
      })
      .catch((error) => {
        console.error("Error deleting user detail:", error);
      });
  });








  const editBtn = newLi.querySelector(".edit-btn");
  editBtn.addEventListener("click", function () {
    newLi.remove();
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
  });
}








window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/b7aac16c348d48469397bdbe291c7904/detail")
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





module.exports = handleFormSubmit;
