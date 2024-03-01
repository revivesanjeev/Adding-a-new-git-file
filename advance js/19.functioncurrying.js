// let multiply=function(x,y){
//     console.log(x*y);}

    // let multiplyByTwo= function(y){
    //     let x=2;
    //     console.log(2*y);}


    //fn currying is we are using multiply method to create multiplyByTwo
// let multiplyByTwo = multiply.bind(this,2); //2 will set to the value of x
// multiplyByTwo(5);


//if pass two argument
// let multiplyByTwo = multiply.bind(this,3,2); 
// multiplyByTwo(5);//output -6 bcz it will ignore 5 and put x =3 and y=2




// if we pass no argument
// let multiplyByTwo=multiply.bind(this)
// multiplyByTwo(2,5);//output-10
// multiplyByTwo(2);//output-NaN






//function currying using function clouser
let multiply=function(x){
return function(y){
console.log(x*y);}}
let multiplyByTwo=multiply(3);//passing 3 as a argument in x variable
multiplyByTwo(7);//the function returned pass 7 as argument