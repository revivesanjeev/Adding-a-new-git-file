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



var fun = a => a

var a =10;

console.log(fun(a))