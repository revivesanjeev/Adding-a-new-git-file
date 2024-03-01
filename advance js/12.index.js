


// //making a object
// var obj={num:2};


// //addToThis is function and "a" is a parameter

// //as this function has no num keyword so we will indirectly access it
// var addToThis=function(a){
//     return this.num+a;};


//     // addToThis is fn     obj is a var obj and    3 is passed as argument as the place of parameter a

// //using the call method we can access num inside addTothis function
// console.log(addToThis.call(obj,3));




// //for multiple argument
// var obj={num:2};



// var addToThis=function(a,b,c){
//     return this.num+a+b+c;};

// console.log(addToThis.call(obj,1,2,3));

// //apply method 
// //we can combined all the argument in a var and passed it as an array

// var arr=[1,2,3];
// console.log(addToThis.apply(obj,arr));



//call method  in this case arr[3,4,5] will go into the a parameter and b,c is not intialised so it return undefined
// var obj = {
//     val: 100}

//     function fun(a, b , c){
//     console.log(a)
//     console.log(b)
//     console.log(c)}

//     fun.call(obj, [3, 4, 5])


//bound method
// var obj={num:2};


// var addToThis=function(a,b,c){
//     return this.num+a+b+c;
// };


// var arr=[1,2,3];
// var bound=addToThis.bind(obj);
// console.log(bound(1,2,3));





//call apply and bind method
var obj={num:2};
var functionName=function(arg1,arg2,arg3){

};

functionName.call(obj,arg1,arg2,arg3);//call method how pass argument
functionName.apply(obj [arg1,arg2,arg3]);//apply method how pass argument
var bound=functionName.bind(obj);//bound first pass obj then pass argument
bound(arg1,arg2,arg3);




    




