// JavaScript source code
function validate() {
    var storedName = localStorage.getItem('rstudentid');
    var storedPw = localStorage.getItem('rpassword');

    var userName = document.getElementById('studentid');
    var userPw = document.getElementById('password');


    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in. Welcome back');
    } else {
        alert('Error on login');
    }
} 
/*function validate() {

    var studentid = document.getElementById("studentid").value
    var password = document.getElementById("password").value

    if (localStorage.getItem("studentid") == document.getElementById("password")) {
        alert("login success!");
    }
    else {
        alert("login failed");
    }*/
