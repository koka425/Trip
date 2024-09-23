
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let myUsername = document.getElementById('name').value;
    console.log(myUsername);
    let dd = document.getElementById('email').value;
    console.log(dd);
    let ee = document.getElementById('mess').value;
    console.log(ee);
    document.getElementById('su').innerText = 'CD'
    // handle submit
  });