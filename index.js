// console.log(printName);

// console.log(a);



// var a = 3;
// var printName = function (name) {

// console.log(name)

// }







// console.log(a);
// var a=10;
// const a=0;
// console.log(b);

// console.log(a)

// console.log(b);

// let a =5;

// var b =6;

// console.log(b);



// const a = 50;



// {

// var a =30;

// let b = 20;

// let c = 30;

// }


// function myFunction() {
   
//     function myFunction() {
    
//         console.log(g); // Output: 9
//     }
//     myFunction(); 
//     let g = 9;
//         console.log(g); // Output: 9
//     }
    
//     myFunction(); 




// var obj = {

//     val: 100
    
//     }
    
//     function fun(){
    
//     console.log(this.val)
    
//     }
    
//     fun()
    

// var obj = {

//     val: 100
    
//     }
    
//     function fun(a, b , c){
    
//     console.log(this.val + a + b + c)
    
//     }
    
//     const fun2 = fun.bind(obj)
    
    
    
//     fun2(1, 2,3)
    





// var obj = {

// val: 100

// }

// function fun(){

// console.log(this.val)

// }
// //TypeError: obj.fun is not a function
// obj.fun()




// var obj = {

//     val: 100
    
//     }
    
//     function fun(a){
    
//     console.log(this.val + a)
    
//     }
    
//     fun.call(obj)



// var obj = {

// val: 100

// }

// function fun(a, b , c){

// console.log(a)

// console.log(b)

// console.log(c)

// }

// fun.call(obj, [3, 4, 5])





// function y(){



//     for(let i=1;i<6;i++){
    
//     setTimeout(() => console.log(i ), i * 1000)
    
//     }
    
//     console.log('Done Coding')
    
    
    
//     }
    
//     y();






// a()

// b()



// function a(){

// console.log('inside a');

// }



// var b = function (){

// console.log('inside b');

// }





    
// function a(){

//     console.log('inside a');
    
//     }
    
    
    
//     var b = function abc(){
    
//     console.log('inside b');
    
//     }
    
//     a()
    
//     abc()


// function fun1(){

//     console.log('a')
    
//     return () => {
    
//     console.log('b')
    
//     }}
    
    
    
//     console.log(fun1());
    




// function fun1(a){

//     const fun2 = (b) => {
    
//     a = a + b;
    
//     console.log(a)
    
//     }}
    
    
    
//     fun1(10)(30)
    


// setTimeout(() => console.log('timer expired'), 1000)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// console.log('inside y')

// })





// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// console.log('inside y')

// })





// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// setTimeout(() => console.log('inside y'), 0)

// })






// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {
//     y();

// console.log('inside x');



// }



// x(function y(){

// console.log('inside y')

// })



// var fun = a => a

// var a =10;

// console.log(fun(a))





// function fun1(){

//     console.log('a')
    
//     }
    
//     function fun2(){
    
//     console.log('b')
    
//     }
    
    
    
//     fun2()
    
//     fun1()















// function outerfunction() {
//     console.log(a);
//     var a = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(a);
//     console.log(this.a)
//     console.log(window.a);
// }}
//     var a = 7;
//     var b =3;
//     outerfunction();









// function outerfunction() {
//     console.log(a);
//     var c = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(b);
//     console.log(c);
//     }
//     }
//     var a = 7;
//     var b =3
//     outerfunction();




// function fun1(){

//     console.log('a')
    
//     return () => {
    
//     console.log('b')
    
//     }}
    
    
    
//     fun1()





// function fun1(a){

//     const fun2 = (b) => {
    
//     a = a + b;
    
//     console.log(a)
    
//     }}
    
    
    
//     fun1(10)(30)




// function handleForm(event) {
//   event.preventDefault();
//   const userName = event.target.userName.value;
//   const userEmail = event.target.userEmail.value;
//   const userPhone = event.target.userPhone.value;

//   const obj = { userName, userEmail, userPhone };

//   //   localStorage.setItem(userPhone, JSON.stringify(obj));

//   axios
//     .post(
//       "https://crudcrud.com/api/d8c129cd8f48450fb6808aafec858be0/Appointments",
//       obj
//     )
//     .then((result) => {
//       alert(`Appointment booked and your unique id is: ${result.data._id}`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   showRecordsOnScreen(obj);

//   document.getElementById("userName").value = "";
//   document.getElementById("userEmail").value = "";
//   document.getElementById("userPhone").value = "";
// }





// window.addEventListener("DOMContentLoaded", function () {
//   //   const keysOfLocalStorage = Object.keys(this.localStorage);
//   //   keysOfLocalStorage.forEach((ele) => {
//   //     showRecordsOnScreen(JSON.parse(this.localStorage.getItem(ele)));
//   //   });

//   axios
//     .get(
//       "https://crudcrud.com/api/d8c129cd8f48450fb6808aafec858be0/Appointments"
//     )
//     .then((result) => {
//       const arrayOfobj = result.data;
//       for (let val of arrayOfobj) showRecordsOnScreen(val);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });






// function showRecordsOnScreen(obj) {
//   const records = document.getElementById("records");

//   const list = document.createElement("li");
//   list.innerHTML = `${obj.userName} - ${obj.userEmail} - ${obj.userPhone} `;

//   const delBtn = document.createElement("button");
//   delBtn.innerHTML = "Delete";
//   delBtn.addEventListener("click", () => {
//     records.removeChild(delBtn.parentElement);
//     // localStorage.removeItem(obj.userPhone);
//     axios
//       .delete(
//         `https://crudcrud.com/api/d8c129cd8f48450fb6808aafec858be0/Appointments/${obj._id}`
//       )
//       .then((result) => {
//         alert("Record removed");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
//   list.appendChild(delBtn);








  
//   const editBtn = document.createElement("button");
//   editBtn.innerHTML = "Edit";
//   editBtn.addEventListener("click", () => {
//     records.removeChild(editBtn.parentElement);
//     // localStorage.removeItem(obj.userPhone);
//     axios
//       .delete(
//         `https://crudcrud.com/api/d8c129cd8f48450fb6808aafec858be0/Appointments/${obj._id}`
//       )
//       .then((result) => {
//         alert("Edit the details then submit");
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     document.getElementById("userName").value = obj.userName;
//     document.getElementById("userEmail").value = obj.userEmail;
//     document.getElementById("userPhone").value = obj.userPhone;
//   });
//   list.appendChild(editBtn);

//   records.appendChild(list);
// }
    
    














// function outerfunction() {
//   console.log(a);

//   var a = 25;

//   innerfunction();

//   function innerfunction() {
//     console.log(a);

//     console.log(window.a);

//     console.log(this.a);
//   }
// }

// var a = 5;

// var b = 6;

// outerfunction();


function a(){
  var  b=10;
  c();
  function c(){
    console.log(b);
  }
}

a();
console.log(b);