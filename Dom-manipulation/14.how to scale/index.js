function handleFormSubmit(event)
  {
    event.preventDefault();
    //storing the values
    const n = event.target.username.value;
    const e = event.target.email.value;
    const p = event.target.phone.value;
    //creating list
    const insetlist = document.getElementsByTagName('ul');
    const list = document.createElement('li');
    const listText = document.createTextNode(n+"-"+e+"-"+p+'<button class="delete-btn">x</button>');
    list.appendChild(listText);
    insetlist.appendChild(list);
    //storing in local storage
    let myObj = {username: n, email: e, phone: p};
    let myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem("User Details", myObj_serialized);
  }


  insetlist.addEventListener('click',function(event)
    {if(event.target.classList.contains('delete-btn')){
      const fruitToDelete = event.target.parentElement;
      insetlist.removeChild(fruitToDelete);};});






module.exports = handleFormSubmit;















// function handleFormSubmit(event)
//   {
//     event.preventDefault();
//     //storing the values
//     const n = event.target.username.value;
//     const e = event.target.email.value;
//     const p = event.target.phone.value;
//     //creating list
//     const unordered = document.getElementsByTagName('ul');
//     const list = document.createElement('li');
//     const listText = document.createTextNode(n+"-"+e+"-"+p);
//     list.appendChild(listText);
//     unordered.appendChild(list);
    
//     //storing in local storage
//     let myObj = {username: n, email: e, phone: p};
    
//     localStorage.setItem("User Details", JSON.stringify(myObj));
//   }

// // module.exports = handleFormSubmit;