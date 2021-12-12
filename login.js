var user = document.querySelector('#user');
user.addEventListener('keyup',function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if(user.value=="ts2972002@gmail.com"){
        user.style.border='1 px solid green';
        u_times.style.display='none';
        u_check.style.display='block';
    }
    else{
        user.style.border='1 px solid red';
        u_times.style.display='block';
        u_check.style.display='none';
        return false;
    }
})

var pass = document.querySelector('#pass');
pass.addEventListener('keyup',function(){
    var p_times = document.querySelector('.p_times');
    var p_check = document.querySelector('.p_check');
    if(pass.value=="12345678"){
        user.style.border='1 px solid green';
        p_times.style.display='none';
        p_check.style.display='block';
    }
    else{
        user.style.border='1 px solid red';
        u_times.style.display='block';
        u_check.style.display='none';
        return false;
    }
})

function validate(){
    if(user.value!=="ts2972002@gmail.com"){
        document.getElementById('error').innerHTML='Wrong credentials!!';
        return false;
    }
    else if(pass.value!=="12345678"){
        document.getElementById('error').innerHTML='Wrong credentials!!';
        return false;
    }
    else{
        alert("Successful");
    }
}