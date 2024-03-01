
this.name='yash'
let me={
    name:"Ashutosh Verma",
    thisInArrow:()=>{
        console.log("My name is "+ this.name);//this.name look into its closest parent and its closest parent is gloabal scope that is 'yash'
    },
    thisInRegular(){
        console.log("My name is"+this.name);//this 
    }};
me.thisInArrow();
me.thisInRegular();