function handleFormSubmit(event) {
    event.preventDefault();
    
    // Retrieve user details
    const n = event.target.username.value;
    const e = event.target.email.value;
    const p = event.target.phone.value;
    
    // Create list item
    const insetlist = document.querySelector('ul');
    const list = document.createElement('li');
    const listText = document.createTextNode(`${n}-${e}-${p}`);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(event) {
        const userDetails = JSON.parse(localStorage.getItem(e)); // Retrieve user details from localStorage
        if (userDetails) {
            localStorage.removeItem(e); // Remove user details from localStorage
            list.remove(); // Remove list item from the screen
        }
    });
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', function(event) {
        const userDetails = JSON.parse(localStorage.getItem(e)); // Retrieve user details from localStorage
        if (userDetails) {
            // Remove existing user details from localStorage and screen
            localStorage.removeItem(e);
            list.remove();

            // Populate input fields with existing values for editing
            document.getElementById('username').value = userDetails.username;
            document.getElementById('email').value = userDetails.email;
            document.getElementById('phone').value = userDetails.phone;
        }
    });
    list.appendChild(listText);
    list.appendChild(deleteBtn);
    list.appendChild(editBtn); // Append edit button to the list item
    insetlist.appendChild(list);
    
    // Store user details as an object in local storage
    let userDetails = { username: n, email: e, phone: p }; // Corrected the object property names
    localStorage.setItem(e, JSON.stringify(userDetails)); // Store with email as key
}

window.onload = function() {
    // Add event listener for delete button clicks
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const userToDelete = event.target.parentElement;
            const email = userToDelete.textContent.split('-')[1].trim(); // Extract email from list item text
            localStorage.removeItem(email); // Remove user details from localStorage
            userToDelete.remove(); // Remove list item from the screen
        }
    });

    // Add event listener for edit button clicks
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const userDetails = JSON.parse(localStorage.getItem(event.target.parentElement.textContent.split('-')[1].trim())); // Retrieve user details from localStorage
            if (userDetails) {
                // Remove existing user details from localStorage and screen
                localStorage.removeItem(event.target.parentElement.textContent.split('-')[1].trim());
                event.target.parentElement.remove();

                // Populate input fields with existing values for editing
                document.getElementById('username').value = userDetails.username;
                document.getElementById('email').value = userDetails.email;
                document.getElementById('phone').value = userDetails.phone;
            }
        }
    });
};

module.exports = handleFormSubmit;
