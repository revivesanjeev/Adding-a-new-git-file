// document.addEventListener("DOMContentLoaded", function() {
//     // Function to handle form submission
//     function submitForm(event) {
//         event.preventDefault(); // Prevent form submission
        
//         // Get input values
//         const username = event.target.elements.name.value;
//         const email = event.target.elements.email.value;
//         const phone = event.target.elements.phone.value;
       
      
//         // Create user object
//         const userDetails = {
//           username: username,
//           email: email,
//           phone: phone
//         };
      
//         // Store user details as JSON string in local storage with key "User Details"
//         localStorage.setItem('User Details', JSON.stringify(userDetails));
//     }

//     // Add event listener for form submission
//     const form = document.querySelector('form');
//     form.addEventListener('submit', submitForm);
// });



function handleFormSubmit(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email = event.target.email.value;
        const phone = event.target.phone.value;

        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('phone',phone);

        const userdetails={
            name,
            email,
            phone
        }

        localStorage.setItem('User Details',JSON.stringify(userdetails));



}



