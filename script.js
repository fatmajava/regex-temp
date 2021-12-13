
let username = document.getElementById("email");


let submit_button = document.querySelector('button');

submit_button.addEventListener("click" ,validateInput);
function validateInput(e){
    e.preventDefault();

//validate that emil format


 let email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
 if(!email_pattern.test(email.value)){

email.nextElementSibling.textContent ='email is invalid';
 

}
else {
    email.nextElementSibling.textContent='ok';
}
}




