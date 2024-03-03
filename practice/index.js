function handleFormSubmit(event){
    event.preventDefault();

    const orderdetails= {
        price:event.target.price.value,
        dish:event.target.dish.value,
        table:event.target.table.options[event.target.table.selectedIndex].text,
    };
   axios
     .post(
       "https://crudcrud.com/api/0793d74044e64b2cb51a24da957d36e2",
       orderdetails
     )
     .then((response) => {
       const orderdetails = response.data;
       alert("order taken");
       displayUserOnScreen(orderdetails);
     })
     .catch((error) => alert(error));

document.getElementById("price").value="";
document.getElementById("dish").value="";
document.getElementById("table").value="";
}




// function displayUserOnScreen(orderdetails) {
//     const orderList=document.getElementById(`${orderdetails.table}`);
//     const newLi = document.createElement("li");
// newLi.innerHTML=`${orderdetails.price}-${orderdetails.dish}-${orderdetails.table}<button class="delete-btn"> Delete Order<button>`
//   orderList.appendChild(newLi);
// //Adding event listener for delete button
// const deleteBtn=newLi.querySelector(".delete-btn");
// deleteBtn.addEventListener("click",function(){
// axios
//   .delete(
//     `https://crudcrud.com/api/0793d74044e64b2cb51a24da957d36e2/${orderdetails._id}`
//   )
//   .then(() => {
//     newLi.remove();
//     alert("ordered cancelled");
//   })
//   .catch(() => alert("error in cancelling order"));
// });}




window.addEventListener("DOMContentLoaded",()=>{
    axios
      .get("https://crudcrud.com/api/0793d74044e64b2cb51a24da957d36e2")
      //return a promise
      .then((response) => {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
          displayUserOnScreen(response.data[i]);
        }
      })
      .catch((error) => {
        alert(error);
      });       
        });






















// function handleFormSubmit(event) {
//   event.preventDefault();

//   const orderdetails1 = {
//     price: event.target.price.value,
//     dish: event.target.dish.value,
//     table: event.target.table.options[event.target.table.selectedIndex].text,
//   };

//   axios
//     .post(
//       "https://crudcrud.com/api/0793d74044e64b2cb51a24da957d36e2/orderdetails",
//       orderdetails1
//     )
//     .then((response) => {
//       const orderdetails1 = response.data;
//       alert("order taken");
//       displayUserOnScreen(orderdetails1);
//     })
//     .catch((error) => console.log(error));

//   // Clearing the input fields
//   document.getElementById("price").value = "";
//   document.getElementById("dish").value = "";
//   document.getElementById("table").value = "";
// }

function displayUserOnScreen(orderdetails1) {
  const orderList = document.getElementById(`${orderdetails1.table}`);
  const newLi = document.createElement("li");
  newLi.innerHTML = `${orderdetails1.price}-${orderdetails1.dish}-${orderdetails1.table} <button class="delete-btn">Delete Order</button> `;
  orderList.appendChild(newLi);

  // Adding event listener for delete button
  const deleteBtn = newLi.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    axios
      .delete(
        `https://crudcrud.com/api/0793d74044e64b2cb51a24da957d36e2/orderdetails/${orderdetails1._id}`
      )
      .then(() => {
        newLi.remove();
        alert("Order detail deleted successfully");
      })
      .catch((error) => {
        alert("Error deleting order detail:", error);
      });
  });
}

// window.addEventListener("DOMContentLoaded", () => {
//   axios
//     .get(
//       "https://crudcrud.com/api/0793d74044e64b2cb51a24da957d36e2/orderdetails"
//     )
//     .then((response) => {
//       console.log(response);
//       for (var i = 0; i < response.data.length; i++) {
//         displayUserOnScreen(response.data[i]);
//       }
//     })

//     .catch((error) => {
//       alert(error);
//     });
// });



    