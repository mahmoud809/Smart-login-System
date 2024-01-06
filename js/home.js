let spanInput = document.getElementById('userName');


if(localStorage.getItem('allUsers') != null)
{
    spanInput.innerHTML = `${localStorage.getItem('userName')}` ;

}

