// function orderFood(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         let foodDelivered=Math.random()>0.5;
//         if(foodDelivered){
//             resolve("Food delivered");
//         }
//          else{
//             reject("Food not delivered");
//          }
//        },2000);
//     });
// }

// function orderDessert(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         let dessertDelivered=Math.random()>0.5;
//         if(dessertDelivered){
//             resolve("Dessert delivered");
//         }
//          else{
//             reject("Dessert not delivered");
//          }
//        },2000);
//     });
// }

// orderFood()
//    .then((foodMsg)=>{
//     console.log(foodMsg);
//     return orderDessert();
//    })
//    .then((dessertMsg)=>{
//     console.log(dessertMsg);
//     console.log("Dream Meal fulfilled");
//    })
//    .catch((err)=>{
//     console.log(err);
//     console.log("Dream Meal failed");
//    });










// console.log('start')
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })
// console.log('end');






// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)})
// promise1.then(res => {
//   console.log(res)})
// console.log('end');






// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })
// promise1.then(res => {
//   console.log(res)
// })
// console.log('end');



// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })
// promise1.then(res => {
//   console.log(2)
// })
// console.log('end');



// console.log('start')
// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))
// console.log('middle')
// fn().then(res => {
//   console.log(res)
// })
// console.log('end')


// console.log('start')
// Promise.resolve(1).then((res) => {
//   console.log(res)})
// Promise.resolve(2).then((res) => {
//   console.log(res)
// })
// console.log('end');





// console.log('start')
// setTimeout(() => {
//   console.log('setTimeout')
// })
// Promise.resolve().then(() => {
//   console.log('resolve')
// })
// console.log('end')




// const promise = new Promise((resolve, reject) => {
//    console.log(1);
//     setTimeout(() => {
//   console.log("timerStart");  
//     resolve("success");
//   console.log("timerEnd");  }, 0);
//   console.log(2);});
//   promise.then((res) => { 
//     console.log(res);
//   });
//   console.log(4);


// const timer1 = setTimeout(() => {
//   console.log('timer1');
//     const promise1 = Promise.resolve().then(() => {
//       console.log('promise1')
//   }) }, 0)
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
  
//   }, 0)

// console.log('start');
// const promise1 = Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//       console.log('timer2')
//     }, 0)
//   });
//   const timer1 = setTimeout(() => {
//     console.log('timer1')
//     const promise2 = Promise.resolve().then(() => {
//       console.log('promise2')})
//   }, 0)
//   console.log('end');










// //question-17
// // Write your code here:
// const projectorPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const ppromise = Math.random() > 0.5;
//       if (ppromise) {
//         resolve('Projector rented successfully');
//       } else {
//         reject('Error: Projectors out of stock');
//       }
//     }, 1000);
//   });
  
//   const pizzasPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pizpromise = Math.random() > 0.5;
//       if (pizpromise) {
//         resolve('Pizzas delivered at time');
//       } else {
//         reject('Error: Pizzas not delivered on time');
//       }
//     }, 2000);
//   });
  
//   const friendsPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const fripromise = Math.random() > 0.5;
//       if (fripromise) {
//         resolve('Both friends available');
//       } else {
//         reject('Error: Both friends not available');
//       }
//     }, 2000);
//   });
  
//   Promise.all([projectorPromise, pizzasPromise, friendsPromise])
//     .then((results) => {
//       results.forEach((result) => {
//         console.log(result);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
  
//   // Do not touch the code below:
//   module.exports = { projectorPromise, pizzasPromise, friendsPromise };
  



// function postTodo() {
//   axious
//     .post("https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo", {
//       title: "Learn Axios",
//       completed: false,
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }



// function getTodos() {
//   axious
//   .get("https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }

// function putTodo() {
//   axious.put("https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo", {
//       title: "Learn Axios",
//       completed: true,
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }


// function deleteTodo() {
//   axious
//     .delete("https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }




// window.addEventListener("DOMContentLoaded",()=>{
//     axios.get(" link")
//     .then((response)=>{
//         console.log(response)
//         for(var i=0;i<response.data.length;i++){
//             showNewUserOnScreen(response.data[i])
//         }})
//         .catch((error)=>{console.log(error)})
// })






//objective 

// console.log("start");

// const fn = () =>
//   new Promise((resolve, reject) => {// keep in mind that promises is inside a arrow fn returning a promises 
//     console.log(1);

//     resolve("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("end");




//  var divideby100= number  => number/100;// 
//  console.log(divideby100(1800));


// const obj = {
//     name: 'John',
//     greetNormal: function() {
//         console.log('Hello, ' + this.name); // Refers to obj.name
//     },
//     greetArrow: () => {
//         console.log('Hello, ' + this.name); // Refers to the global object (or undefined in strict mode), not obj.name
//     }
// };

// obj.greetNormal(); // Output: Hello, John
// obj.greetArrow(); // Output: Hello, undefined (or Hello, [global object] in non-strict mode)
var obj = {
  age: "25",

  findageArrowFn: () => {
    console.log(this.age);
  },

  findAgeNormalFn: function () {
    console.log(this.age);
  },
};

obj.findageArrowFn();

obj.findAgeNormalFn();