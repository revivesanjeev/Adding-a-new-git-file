//4 
//question 1
// var a = 3;
// function printName(name){
// console.log(name)}
// printName("YAVTECH");//first function invoke will happen then nxt line console will execute
// console.log(a);
// //output:- YAVTECH and 3



// QUESTION 2

// printName("YAVTECH");
// console.log(a);//we are trying to access before intialisation so, variable a will get space in memory but not intialised 
// var a = 3;
// function printName(name){
// console.log(name)}//as function statement hoisted in js so it will work as it is.
//output: YAVTECH (first line) undefined (second line)




// // QUESTION 3
// console.log(printName);
// console.log(a);//as variable is not intialised but it is with var so it will also print undefined
// var a = 3;
// //it is function expression,it won't hoisted printname will be treated as variable and print undefined
// var printName = (name) => {
// console.log(name)}
//output-undefined undefined




// //fat arraow fn not hoisted video
// console.log(a);//print undefined
// var a=()=>{
//     return 100 // a will alloted memory but not intialised in 1st move(before reaching any line memory gets alloted to the variable) ,a will be treat like variable 
// }
//output-undefined




// var a=()=>{
//     return 100 }
//     console.log(a());//after 2nd declaration it will treated like function
//output-100



// console.log(a());//TypeError: a is not a function
// var a=function(){
//     return 100;
// }
// console.log(a());//print 100


// console.log(a());//TypeError: a is not a function
// var a=()=>{
//     return 100;
// }
// console.log(a());//print 100





// //QUESTION 4
// console.log(printName);//undefined printname is not intialised 
// console.log(a);//undefined a is not intialised 
// var a = 3;
// var printName = function (name) {//printname is intialised with fn reference 
// console.log(name)}
// console.log(printName);//it will print fn reference
//output
// undefined
// undefined
// [Function: printName]



//Task-5
//question-1
// var a = 2;
// var c = 2;
// function b(){
// var x = 2;
// var c = 4
// console.log(c)}

// console.log(a);//2
// console.log(this.a);//2
// console.log(this.c)//2
// console.log(this.x)//no x found print undefined
// console.log(window.a)//a of global scope i.e 2
// console.log(window.x)//undefined no any x in global
// console.log(b());// c=4 in local scope
// //output in chrome : 2 2 2 undefined 2 undefined 4





//question-2
// function abc() {
// console.log(a);}
// var a = 7;//first intialise then function invoke
// abc();



//question -3
    // abc();//first function invoke that is hoisted already and then a will be intialised so, it will print undefined
    // function abc() {
    //     console.log(a);}
    // var a = 7;



//question-4
// function outerfunction() {
//     console.log(a);//as here no a is intialised so it will look into the lexical scope of parent and print 7
//     var c = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(b);
//     console.log(c);}}
//     var a = 7;
//     var b =3;
//     outerfunction();//variable is intialised 
    
    

//     //question-5
    // function outerfunction() {
    //     console.log(a);//it will look into its brand new execution and get value undefined bcz in brand new execution a is aready present so , it will not look into the parent lexical scope
    //     var a = 10;
    //     innerfunction();
    //     function innerfunction() {
    //     console.log(a);
    //     console.log(window.a);
    //     console.log(this.a)}}
    //     var a = 7;
    //     var b =3;
    //     outerfunction();
    
    



//task-8

//question-2
// const a = 50;{
// var a =30;
// let b = 20;
// let c = 30;}
// console.log(a)//var a will go out of the scope so it show error bcz SyntaxError: Identifier 'a' has already been declared







// var a = 50;//in GEC a will be intialised as undefined before execution of any line
// function fun(){//function declaration with its definition
// var a = 30;
// let b = 20;
// let c = 30;}
// fun();//when  invoked create brand new execution context
// console.log(a);//as a is already in GEC so it will print 50 and a=30 in brand execution context of function in memory part






//question-6
// const a = 10;{
// var a = 100;}
// console.log(a)
//Error -> var can come out of block scope // Error -> a connot be redeclared



//Task-9
//function x will be intialised with its definition 
    // function x(){
    // let a = 10;
    // function y(){console.log(a);}
    // y();}
    // //when x() will be invoked then code definition will be in code box when in code box function y() will be called then 
    // // it creates brand new execution context in that it has lexical scope of parent so it has a=10
    // x();
  



// //que-3
//     function x(){
//         let a = 10;
//         function y(){ 
//         console.log(a);}  
//         return y;}
//         console.log( x());
        //output -Reference of function y



//ques-4
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);}
//     return y;}
//     const z = x();
//     console.log(z());
   //when fn y is returned and assigned into z ,when z will be invoked as a function z will look into its memory  a is present or not if not go into lexical scope i.e it's parent memory if found it will take it and print






// //question 5
//    function x(){
//     let a = 10;
//     function y(){
//     console.log(a); }
//     a= 50;//this is pointing to the same memory location where a has value 10
//     return y;//before return y a will got updated a=50
// }
//     const z = x();
//     console.log(z());
    //output -50 undefined bcz 50 due to console and undefined due to function y returning nothing 






//Task-10
  

//   var obj = {
//     val: 100}
//     function fun(){
//     console.log(this.val)}
//     fun()


//this will print undefined not bcz of var obj  bcz of this keyword 
//if var obj is removed then also it print undefined
// function fun(){
//     console.log(this.val)}//bcz this refer to window and in window there is no val 
//     fun()




// var obj = {
//     val: 100}
//     function fun(){
//      console.log(this.val)}
//      obj.fun()
     //fun is not method of obj so it will show error



     //obj.fun() can be access using this way
    //  var obj = {
    //     val: 100,
    //     fun: function() {
    //         console.log(this.val); }};
    // obj.fun();
    


    //question-3
    // var obj = {
    // val: 100}
    // function fun(){
    // console.log(obj.val)}//it will look to the val of obj
    // fun()



   
    //    var obj = {
    //     val: 100}
    //     function fun(){
    //     console.log(this.val)}
    //     fun.call(obj)
//obj is passed as a argument and this keyword will refer to the obj bcz of call keyword it will be attach to the fun will attach to the obj







// var obj = {
//     val: 100}
//     function fun(g){
//     console.log(this.val)}//print undefined bcz obj is passed as argument but this will still refer to the window element or obj is not attach to fun
//     fun(obj)




    //question 4

    // var obj = {
    //     val: 100}
    //     function fun(a){
    //     console.log(this.val + a)}//as fun don't know about a '+' operator not work
    //     fun.call(obj)
    // //print not a number NaN



//question 5
    // var obj = {
    //     val: 100}
    //     function fun(a){
    //     console.log(this.val + a)//print 103
    // }   fun.call(obj, 3)//3 will assign to parameter a as argument

    
    

    //question -6
    // var obj = {
    //     val: 100
    //     }
    //     function fun(a, b , c){
    //     console.log(this.val + a + b + c)
    //     }
    //     fun.call(obj, 3, 4, 5)//print -112



//apply method convert array  [3,4,5] in 3,4,5
// var obj = {
//   val: 100,
// };
// function fun(a, b, c) {
//   console.log(this.val + a + b + c);
// } //print 112
// fun.apply(obj, [3, 4, 5]);





// //question-8 
// var obj = {
//     val: 100}
//     function fun(a, b , c){
//     console.log(this.val + a + b + c)
//     }  //100  3,4,5 undefined undefined concatenation will occur
//     //in a [3,4,5] this will be assigned and b and c will print undefined
//     fun.call(obj,[ 3, 4, 5])







//Task-11 solve again
// const name = (arr)=>{
// let i=arr.length;
//     for(let j=0;j<i;j++){
//         console.log("Hello", `${arr[j]}`)}}
// let fun = name(["Ram","Shyam"]);
// fun()// Print Hello Ram
// fun()//print Hello Shyam




//task-12
//ques-1
// a();
// b();
// function a() {
//   console.log("inside a");}
// var b = function () {
//   console.log("inside b");
// };
//error b is not a funtion: type error




//question-3
// function a() {
//   console.log("inside a");}
// var b = function abc() {
//   console.log("inside b");};
// a();
// abc();
//output: ReferenceError: abc is not defined





// a()//print inside a
// console.log(b);//print undefined
// function a(){
// console.log('inside a');}
// var b =  ()=>{
// console.log('inside b');}





//question-5a
// function fun1(){
//     console.log('a')
//     return () => {
//     console.log('b')
//     }}//keep in mind that whenever you try to invoke func1() it will print only the thing which is inside console in func1 but if you try to console(func1) then it print whatever it return
    // console.log(fun1())




    // question-5E
    // function fun1(a){
    // const fun2 = (b) => {
    // a = a + b;
    // console.log(a)}}
    // fun1(10)(30)
//as func1 is not returning any fun then how it will be act as function argument (30) where will go ,so it will show error


//Task-13
//ques-2
// var fun = function fun(){ return a} ;
// console.log(fun(a));
// var a =10;
// print undefined 


//ques-3
// var fun = a =>{ a }
// var a =10;
// console.log(fun(a))
//bcz of return keyword it will print undefined 








//Task-15

//ques-4
//SyntaxError: Unexpected token 'var' bcz { } is not used , and also after return statement no line will execute
// var fun =( a, b) =>
// var sum = a + b
// return sum
// var a =10;
// var b = 20
// console.log(fun(a, b))









// var student = function(name){
// this.name = name;
// function printName() {
// console.log(this.name)}
// printName(student)}
// var yash = new student("yash")
//   //it will print undefined bcz it has no access of the object that why this.name refer to window.name it will print undefined
 





 
// var student = function(name){
// this.name = name;
// that=this;
//    function printName() {
//       console.log(that.name)}   
//          printName()}
//   var yash = new student("yash")
//name is accessible using that keyword




// var student = function(name){
//     this.name = name;
//     var printName = () => {
//       console.log(this.name)}
//      printName()}
//   var yash = new student("yash")
//as here I am using arrow fn it will look for name in its closest parent if get it print it but this functionality not available with normal function


//question 17
// function fun1(){
//     console.log("a")}
//     function fun2(){
//     console.log(b)}
//     setTimeout(fun2, 1000)
//     fun1()
    //fun1 enters call stack first and then fun2
    //fun1 enters call stack first and fun2 first enters callback queue and then callsatck



//     console.log(printName);

// console.log(a);



// var a = 101;



// var printName = function (name) {

// console.log(name)

// }






// console.log(a)

// console.log(b);
// var a =7;
// var b =11;
// console.log(b);