// Forgot your password, not active

$(document).ready(function(){
    $("#forgot").click(function(){
        alert("Please send an email to h01644919137@gmail.com to renew your password. Thanks!");
    });
});

// Sign in and sign up using LocalStorage
function store(){

    var name = document.getElementById('logemailSU');
    var pw = document.getElementById('logpassSU');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length < 8){
        alert('The length of password must be more than 8');

    }else if(!pw.value.match(numbers)){
        alert('Please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
        name.push(name.value);
        pw.push(pw.value);
        
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('logemailSI');
    var userPw = document.getElementById('logpassSI');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in. Click OK to go to the homepage.');
        location.href='/index.html';
    }else{
        alert('Your password or your email is not correct.');
    }

}




