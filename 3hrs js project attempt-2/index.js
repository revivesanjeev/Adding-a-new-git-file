

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); //preventing from auto submitted

  const title = document.getElementById("title").value.trim(); // if any extra space then remove
  const password = document.getElementById("password").value.trim(); // if any extra space then remove
//making a object of title and password 
  const userdetails = {
    title: title,
    password: password,
  };
//post the data using axios on crud crud
  axios
    .post(
      "https://crudcrud.com/api/574aebc0d91b4e4eb9bb597aff24ce92/password",
      userdetails
    )
    .then((response) => {
      const newUserDetails = response.data;
      alert("Password added successfully");
      displayUserOnScreen(newUserDetails);// display on the screen fn called with argu  as userdetails 
      updatePasswordCount(1); // Increment password count
    })
    .catch((error) => {
      console.error(error);
      alert("Error in adding password");
    });

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("password").value = "";
}

// Function to display user details on the screen
function displayUserOnScreen(userdetails) {
    const passList = document.getElementById("allpass");
    const newLi = document.createElement("li");//creating new element 
    newLi.innerHTML = `${userdetails.title} - ${userdetails.password} <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button>`;
    passList.appendChild(newLi);//append in allpass ul

    // Adding event listener for delete button
    const deleteBtn = newLi.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        axios.delete(
            `https://crudcrud.com/api/574aebc0d91b4e4eb9bb597aff24ce92/password/${userdetails._id}`//delete from cloud using specific id
        )
        .then(() => {
            newLi.remove();//remove from screen
            updatePasswordCount(-1); // Decrement password count by -1
            alert("Password deleted successfully");
        })
        .catch(() => {
            alert("Error in deleting password");
        });
    });

    // Adding event listener for edit button
    const editBtn = newLi.querySelector(".edit-btn");
    editBtn.addEventListener("click", function () {
      document.getElementById("title").value = userdetails.title;
      document.getElementById("password").value = userdetails.password;
      updatePasswordCount(-1); // Decrement password count by -1
      newLi.remove();//remove from screen

      axios
        .put(
          `https://crudcrud.com/api/574aebc0d91b4e4eb9bb597aff24ce92/password/${userdetails._id}`,
          updatedUserDetails
        )
        .then(() => {
          // Update the password entry on the screen
          userdetails.title = newTitle;
          userdetails.password = newPassword;
          newLi.innerHTML = `${newTitle} - ${newPassword} <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button>`;
          alert("Password updated successfully");
        })
        .catch(() => {
          alert("Error in updating password");
        });
    });
}

// Function to update password count
function updatePasswordCount(count) {
    const passwordCount = document.getElementById("passwordcount");//selecting the passwordcount id 
    let currentCount = parseInt(passwordCount.textContent.split(":")[1].trim()) || 0;
    currentCount += count;//increment the count
    passwordCount.innerHTML = `<li>Total Passwords: ${currentCount}</li>`; // Update password count and insert element 
}

// Function to load passwords on page load
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/574aebc0d91b4e4eb9bb597aff24ce92/password")
    .then((response) => {
        const passwordCount = document.getElementById("passwordcount");
        passwordCount.innerHTML = `<li>Total Passwords: ${response.data.length}</li>`; // Set initial password count

        response.data.forEach((userdetails) => {
            displayUserOnScreen(userdetails);
        });
    })
    .catch((error) => {
        console.error(error);
        alert("Error in fetching passwords");
    });

    // Add event listener for form submission
    document.getElementById("password-form").addEventListener("submit", handleFormSubmit);
});




//filter funtionality on the basis of title 
document.getElementById("search").addEventListener("keyup", function (event) {
  const searchTerm = event.target.value.trim().toLowerCase();
  const listItems = document.querySelectorAll("#allpass li");

  listItems.forEach((item) => {
    const titleText = item.textContent.trim().toLowerCase();
    if (titleText.includes(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
