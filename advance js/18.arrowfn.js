"use strict";


// let getA=a=>a;
// console.log(getA(1));

// let square=a=>a*a;


//when you are using { } inside a arrow fn use return keyword
// let square=(a)=>{ return a*a};
// console.log(square(2));


// //when you are not passing argument then it takes it from global scope
// var a=4;
// let square=()=>{return a*a};
// console.log(square());




//_ underscore can be used but it's not recomended
// var a=4;
// let square=_=>{return a*a};
// console.log(square());



//pass multiple argument in arrow fn
// let mult =(a,b)=>{return a*b};
// console.log(mult(2,4));



// var x=function(){
//     this.val=1;

//     //as settimeout has no this keyword  so this.val not be recognized inside
//     setTimeout(function(){
//         this.val++;
//         console.log(this.val)//output NaN
//     },1)
// };

// var xx=new x();




// var x=function(){
//     var that=this;
//     this.val=1;

// //using that keyword we can access val and increment it
//     setTimeout(function(){
//         that.val++;
//         console.log(that.val)//output NaN
//     },1)
// };

// var xx=new x();





 //fat arrow has not its own this it uses it's parent this keyword
 
// var x=function(){
//     this.val=1;
// //arrow fn can directly access val and increment it
//     setTimeout(()=>{
//         this.val++;
//         console.log(this.val)//output NaN
//     },1)
// };

// var xx=new x();




//get the argument at 0th index
// var x=function(){
//     console.log(arguments[0])
// };
// x(1,2,3);

//but if use arrow fn then it print array
// var x = ()=> {
// console.log(arguments[0])
// };

// x(1,2,3);


//when using arrow fn then you should use spread operator i.e 3 dot (...n) passing n number of argument
var x = (...n)=> { console.log(n[0])};
    x(1,2,3);
