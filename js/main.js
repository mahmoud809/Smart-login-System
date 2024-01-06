// Thing JS

let nameInput = document.querySelector('.inputName');
let emailInput = document.querySelector('.inputEmail');
let passwordInput = document.querySelector('.inputPassword');
let nameError = document.querySelector('.nameError');
let emailError = document.querySelector('.emailError');
let passwordError = document.querySelector('.passwordError');
let btnSignUp = document.querySelector('.sign-up');
let successLayer = document.querySelector('.success-layer');
let failLayer = document.querySelector('.fail-layer');
let emailExistedLayer = document.querySelector('.email-existed-layer');

let allUsers = [];

if(localStorage.getItem('allUsers') != null)
{
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}


function validateNameInput(){
    let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;

    return nameRegex.test(nameInput.value);
  

}

function validateEmailInput(){
    let emailRegex = /^[a-zA-Z]{3,}@.*\.com$/;

    return emailRegex.test(emailInput.value);
  
}


function validatePasswordInput(){
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    return passwordRegex.test(passwordInput.value);
  

}


nameInput.addEventListener('blur', function () {

    if(validateNameInput()){

        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
        nameError.classList.add('d-none');

    } 
    else {
        nameInput.classList.remove('is-valid');
        nameInput.classList.add('is-invalid');
        nameError.classList.remove('d-none');
    }
});

emailInput.addEventListener('blur', function () {

    if(validateEmailInput()){

        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        emailError.classList.add('d-none');

    } 
    else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
        emailError.classList.remove('d-none');
    }
});

passwordInput.addEventListener('blur', function () {

    if(validatePasswordInput()){

        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
        passwordError.classList.add('d-none');

    } 
    else {
        passwordInput.classList.remove('is-valid');
        passwordInput.classList.add('is-invalid');
        passwordError.classList.remove('d-none');
    }
});

function checkIfEmailExist()
{
    for(let i = 0 ; i < allUsers.length ; i++)
        {
            if (allUsers[i].email == emailInput.value)
            {
                return true;
            }
        }
}


function sentUserNameToHome()
{
    for (let index = 0; index < allUsers.length; index++) 
    {
        
        localStorage.setItem('userName' , allUsers[index].name);
        
        
    }
}

function setUsers() {
    let user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    allUsers.push(user);
    
}

btnSignUp.addEventListener('click', function() {

    if (validateNameInput() && validateEmailInput() && validatePasswordInput()) {

        if (checkIfEmailExist() == true)
        {
            successLayer.classList.add('d-none');
            emailExistedLayer.classList.remove('d-none');
        }
        else
        {

            setUsers();
            
            deleteInputs();

            localStorage.setItem('allUsers' , JSON.stringify(allUsers));
            sentUserNameToHome();

            nameInput.classList.remove('is-valid');
            emailInput.classList.remove('is-valid');
            passwordInput.classList.remove('is-valid');
            successLayer.classList.remove('d-none');

            
            setTimeout(function() 
            {
                window.location.href = 'home.html'; 
            }, 1000); 

        }
        
    } 
    
});


function deleteInputs(){

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

