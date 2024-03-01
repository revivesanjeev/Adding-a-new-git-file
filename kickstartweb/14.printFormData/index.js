function handleFormSubmit(event){
    event.preventDefault();

console.log("Name:",event.target.u_name.value);
console.log("Email:",event.target.u_email.value);
console.log("Phone:",event.target.u_tel.value);
console.log("Date:",event.target.u_date.value);
console.log("Time:",event.target.u_time.value);



}

module.exports=handleFormSubmit;