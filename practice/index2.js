function handleFormSubmit(event){
    event.preventDefault();
    const title=document.getElementById("title").value.trim();
    const password=document.getElementById("password").value.trim();

    const userdetails={
        title:title,
        password:password
    };
    axios
    .post("link",userdetails)
    .then((response)=>{
        const newuserdetails = response.data;
        alert("Password added successfully");
        displayUserOnScreen(newuserdetails);
        updatePasswordCount(1);
    })
    .catch((error)=>{
        alert("Error in adding password");
    });
    document.getElementById("title").value="";
    document.getElementById("password").value="";
}


function displayUserOnScreen(userdetails){
  const passList = document.getElementById("allpass");
  const newLi = document.createElement("li");
  newLi.innerHTML = `${userdetails.title}-${userdetails.password} <button 
     class="delete-btn"> Delete</button> <button class="edit-btn">Edit</button>`;

  passList.appendChild(newLi);
  const deleteBtn = newLi.querySelector(".delete-btn");

  // Adding event listener for delete button
  deleteBtn.addEventListener("click", function () {
    axios
      .delete(`using template literals bcz want to use id as dynamic`)
      .then(() => {
        // whatever want to perform
        newLi.remove(); //remove from screen
        updatePasswordCount(-1); // Decrement password count by -1
        alert("Password deleted successfully");
      })
      .catch(() => {
        alert("error in deleting ");
      });
  });

   // Adding event listener for edit  button

   const Editbtn=newLi.querySelector(".edit-btn");
   Editbtn.addEventListener("click",function(){
    //whatever you want to perform

    //populate the editing element to input feild back
   })
}
