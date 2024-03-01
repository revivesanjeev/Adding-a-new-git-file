//application of call bind and apply



//in this inside add function a,b will be from obj and c is passed as argument



// let add=function(c){
//     console.log(this.a+this.b+c);
// };

// let obj={a:1,b:2};
// add.call(obj,3);


// //THIS return array like object not exactly array ,so many methode work for array can't be applied on the same.
// let argsToArray=function(){
//     console.log(arguments);
// };
// argsToArray(1,2,3)


//how to convert array like object in array using call method 
//  let argsToArray=function(){
//     console.log([].slice.call(arguments));
//  };
//  argsToArray(1,2,3)
//can apply array property




//when you are not using classes and you are using fn function constructor ,and you have base constructor and sub constructor. you want to call base constructor from sub constructor use call method

// let mammal=function(legs){
//     this.legs=legs;
// };

// let cat=function(legs, isDomesticated){
//     //I don't want to run the legs again so we inherite from base class
//     mammal.call(this,legs);
//   this.isDomesticated=isDomesticated;
// }

// //lion will be an instance of this mammal
// let lion=new cat(4,false);
// console.log(lion);









//apply practical example

//when you pass an array as an argument it convert it in regular argument
// let numArray=[1,2,3];
// //array does not have this functionality that it convert it in an argument
// //but using apply we can call it
// console.log(Math.min(1,2,3));
// //apply convert array in argument
// console.log(Math.min.apply(null,numArray));





//bind functionality


//1st
// let button=function(content){
//     this.content=content;};

// button.prototype.click=function(){
// console.log(`${this.content} clicked`);};
// let newButton=new button('add');

// //loosely bound
// let looseClick=newButton.click;
// looseClick();

// //tightly bound using bind 
// let boundButton=newButton.click.bind(newButton);
// boundButton();





//2nd
//not the best way to do it
// let myObj={

//     asyncGet(cb){
//         cb();
//     },
//     parse(){
//         console.log('parse called');
//     },

//     render(){
//         that=this;
//         this.asyncGet(function(){
//             that.parse();
//         });
//     }
// };
// myObj.render();





//using bind 

let myObj={

    asyncGet(cb){
        cb();
    },
    parse(){
        console.log('parse called');
    },

    render(){
        that=this;
        this.asyncGet(function(){
            this.parse();
        }.bind(this));//binding outer this to inner
    }
};
myObj.render();







