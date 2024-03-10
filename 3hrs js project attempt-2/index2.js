// Function to dynamically write and erase the phrase
function writeAndErase(index, direction) {
  const phrase =
    "Unlock the ease of accessing all your passwords, simplifying your digital life with one login";
  const passwordReminder = document.getElementById("password-reminder");

  if (index >= 1 && index <= phrase.length) {
    passwordReminder.textContent = phrase.slice(0, index);
  }

  index += direction;

  if (index > phrase.length || index < 0) {
    direction *= -1;
  }

  setTimeout(() => {
    writeAndErase(index, direction);
  }, 100);
}

// Start writing and erasing process
writeAndErase(1, 1);

// Display user photo
const photoInput = document.getElementById("photo-input");
const photoPreview = document.getElementById("photo-preview");

photoInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      photoPreview.style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
  } else {
    photoPreview.style.backgroundImage = "none";
  }
});

// Filter functionality based on title
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

// Function to handle form submission
async function handleFormSubmit(event) {
  event.preventDefault(); // Prevent auto submission

  // Extract input values
  const website = document.getElementById("website").value.trim();
  const title = document.getElementById("title").value.trim();
  const password = document.getElementById("password").value.trim();

  // Create user details object
  const userdetails = {
    website: website,
    title: title,
    password: password,
  };

  try {
    // Post data using axios
    const response = await axios.post(
      "https://crudcrud.com/api/85cfeb5d2dbc4ccba555a89191d9047e1/password",
      userdetails
    );

    const newUserDetails = response.data;
    alert("Password & website added successfully");
    displayUserOnScreen(newUserDetails); // Display on the screen
    updatePasswordCount(1); // Increment password count
  } catch (error) {
    console.error(error);
    alert("Error in adding website & password");
  }

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("password").value = "";
  document.getElementById("website").value = "";
}

// Function to display user details on the screen
function displayUserOnScreen(userdetails) {
  const passList = document.getElementById("allpass");
  const newLi = document.createElement("li"); // Create new list item
  newLi.innerHTML = `${userdetails.website}-${userdetails.title} - ${userdetails.password} <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button>`;
  passList.appendChild(newLi); // Append to list

  // Add event listener for delete button
  const deleteBtn = newLi.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", async function () {
    try {
      await axios.delete(
        `https://crudcrud.com/api/85cfeb5d2dbc4ccba555a89191d9047e1/password/${userdetails._id}`
      );
      newLi.remove(); // Remove from screen
      updatePasswordCount(-1); // Decrement password count
      alert("Password deleted successfully");
    } catch (error) {
      alert("Error in deleting password");
    }
  });

  // Add event listener for edit button
  const editBtn = newLi.querySelector(".edit-btn");
  editBtn.addEventListener("click", function () {
    // Code for editing
  });
}

// Function to update password count
function updatePasswordCount(count) {
  const passwordCount = document.getElementById("passwordcount");
  let currentCount =
    parseInt(passwordCount.textContent.split(":")[1].trim()) || 0;
  currentCount += count; // Increment count
  passwordCount.innerHTML = `<li>Total Passwords: ${currentCount}</li>`; // Update password count
}

// Function to load passwords on page load
async function loadPasswords() {
  try {
    // Fetch passwords
    const response = await axios.get(
      "https://crudcrud.com/api/85cfeb5d2dbc4ccba555a89191d9047e1/password"
    );

    // Display passwords
    const passwordCount = document.getElementById("passwordcount");
    passwordCount.innerHTML = `<li>Total Passwords: ${response.data.length}</li>`; // Set initial password count
    response.data.forEach((userdetails) => {
      displayUserOnScreen(userdetails);
    });
  } catch (error) {
    console.error(error);
    alert("Error in fetching passwords");
  }
}

// Event listener for form submission
document
  .getElementById("password-form")
  .addEventListener("submit", handleFormSubmit);

// Event listener for page load
window.addEventListener("DOMContentLoaded", loadPasswords);
