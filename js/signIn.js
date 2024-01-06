let emailInput = document.querySelector('.inputEmail');
let passwordInput = document.querySelector('.inputPassword');
let loginBtn = document.querySelector('.logn');
let emailExistedLayer = document.querySelector('.email-existed-layer');

let allUsers = [];

if (localStorage.getItem('allUsers') != null)
{
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}



function checkEmailPassword(){
    for (let index = 0; index < allUsers.length; index++) 
    {
        if(allUsers[index].email == emailInput.value && allUsers[index].password == passwordInput.value )
        {
            localStorage.setItem('userName' , allUsers[index].name);
            return true;
        }
    }
}

loginBtn.addEventListener('click' , function(){

    if (checkEmailPassword() == true)
    {
        setTimeout(function() 
            {
                window.location.href = 'home.html'; 
            }, 1000); 
    }
    else{
        emailExistedLayer.classList.remove('d-none');
    }
});