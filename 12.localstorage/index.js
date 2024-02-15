const form = document.getElementById('user-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  localStorage.setItem('Username', username);
  localStorage.setItem('Email', email);
  localStorage.setItem('Phone', phone);

  alert('User details stored successfully!');
});