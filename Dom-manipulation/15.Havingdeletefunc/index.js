function handleFormSubmit(event) {
    event.preventDefault();
    
    // Retrieve user details
    const n = event.target.username.value;
    const e = event.target.email.value;
    const p = event.target.phone.value;
    
    // Create list item
    const  insetlist = document.getElementsByTagName('ul');
    const list = document.createElement('li');
   const listText = document.createTextNode(n+"-"+e+"-"+p+'<button class="delete-btn">Delete</button>');
    list.appendChild(listText);
    insetlist.appendChild(list);
    
    // Store user details as an object in local storage
    let userDetails = { username, email, phone };
    localStorage.setItem(email, JSON.stringify(userDetails)); // Store with email as key
  }
  


  
  insetlist.addEventListener('click',function(event)
    {if(event.target.classList.contains('delete-btn')){
      const fruitToDelete = event.target.parentElement;
      insetlist.removeChild(fruitToDelete);
      localStorage.removeChild(fruitToDelete);
    };});

  module.exports = handleFormSubmit;