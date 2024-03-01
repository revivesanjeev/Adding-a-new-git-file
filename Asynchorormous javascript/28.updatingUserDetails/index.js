
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const username1 = document.getElementById('username');
  const email1 = document.getElementById('email');
  const phone1 = document.getElementById('phone');
  const my_obj = {
    name: username1.value,
    email: email1.value,
    phone: phone1.value,
  };

  const my_obj1 = JSON.stringify.parse(my_obj);
  // const my_obj2=JSON.parse(my_obj1)
  axios
    .post(
      `https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo/${userId}`,
      userDetails
    )
    .then((response) => {
      console.log("User details updated successfully");
      showUserOnScreen(response.data); // Assuming displayUserOnScreen function is defined elsewhere
    })
    .catch((error) => {console.log(error)});
}








function showUserOnScreen(my_obj) {

  const username1 = document.getElementById("username");
  const email1 = document.getElementById("email");
  const phone1 = document.getElementById("phone");
  const li_elem = document.createElement("li");

  li_elem.textContent = my_obj.name + "-" + my_obj.email + "-" + my_obj.phone;
  const text_item = document.getElementById("list_of_items");
  text_item.appendChild(li_elem);
  const del_element = document.createElement("input");
  del_element.value = "delete";
  del_element.type = "button";
  del_element.onclick = () => {
    axios
      .delete("link")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
      });
  };


  li_elem.appendChild(del_element);
  text_item.appendChild(li_elem);



  
  const edit_element = document.createElement("input");
  edit_element.value = "Edit";
  edit_element.type = "button";
  edit_element.onclick = () => {
    axios
      .delete("link")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", err);
      });
    text_item.removeChild(li_elem);
    username1.value = my_obj.name;
    email1.value = my_obj.email;
    phone1.value = my_obj.phone;
  };

  li_elem.appendChild(edit_element);
  text_item.appendChild(li_elem);
}







window.addEventListener('DOMContentLoaded',()=>{
axios       
   .get(`https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo`)
       .then((response) => {
                for(var i=0;i<response.data.length;i++){
                    console.log('Response.data:',response.data[i]);
                    showUserOnScreen(response.data[i]);
                }})

       .catch((error) => {console.log('Error fetching data:',error);
    });

});



module.exports = {
  handleFormSubmit,
};
