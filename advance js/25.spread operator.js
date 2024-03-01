// const obj1={
//     key1:'value1',
//     key2:'value2'
// }

// const obj2=obj1//as it is a deep copy so value of obj1 
// obj2.key1='value100'//obj2 storing the reference of obj1 so,it will change in obj1
// console.log(obj1)



// const obj1={
//     key1:'value1',
//     key2:'value2'
// }

// const obj2={ ...obj1,key1:'value100'}//using spread operator we do shallow copy so if we change value then it will not reflect in original object key
// console.log(obj2);





//how spread operator work with array of object 


// const arr1=[1,2];
// const arr2=[3,4];
// const arr3=[...arr1,...arr2]
// console.log(arr3)






const arr1=[{a:1},{b:2},{c:2}];
const arr2=[3,4];
const obj={d:2}
const arr3=[...arr1,...arr2,{...obj}]
console.log(arr3);