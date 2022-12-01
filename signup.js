// JavaScript source code
function store_data() {
    let name = document.getElementById('rstudentid');
    let pw = document.getElementById('rpassword');
    let username = document.getElementById('rname');
    localStorage.setItem('rstudentid', rstudentid.value);
    localStorage.setItem('rpassword', rpassword.value);
    localStorage.setItem('rname', rname.value);
    alert("Account created");
}
/*if (!localStorage.getItem("studentid")) {
    localStorage.setItem("studentid", JSON.stringify([]));
    }

var arr = JSON.parse(localStorage.getItem("studentid"));
console.log(arr)

let studentid = document.getElementById("studentid");
let password = document.getElementById("password");

let store_data = () => {
    credentials.push({ studentid: studentid, password: password });
    localStorage.setItem("studentid", JSON.stringify(arr))

};*/
