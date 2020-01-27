function validate(){
var email = document.getElementById("email");
var password = document.getElementById("password");
if(email.value.trim() == ""){
    email.style.border = "3px solid red";
    email.placeholder = "Please enter valid email address here";
    return false;
}
else if(password.value.trim() == ""){
    password.style.border = "3px solid red";
    password.placeholder = "Enter password";
    return false;
}
else if(email.value != password.value){
    alert("Please enter valid credentials");
    return false;
}
else if(email.value == password.value){
    return true;
}
}