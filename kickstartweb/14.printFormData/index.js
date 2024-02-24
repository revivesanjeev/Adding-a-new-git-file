function handleFormSubmit(event){
    event.preventDefault();

console.log(event.target.u_name.value);
console.log(event.target.u_email.value);
console.log(event.target.u_tel.value);
console.log(event.target.u_date.value);
console.log(event.target.u_time.value);


//    console.log("Name:", name);
//   console.log("Email:", email);
//   console.log("Phone:", tel);
//   console.log("Date:", date);
//   console.log("Time:", time);
}

module.exports=handleFormSubmit;