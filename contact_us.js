
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let myUsername = document.getElementById('name').value;
    console.log(myUsername);
    let dd = document.getElementById('email').value;
    console.log(dd);
    let ee = document.getElementById('mess').value;
    if(document.getElementById('mess').value.trim() === '' || document.getElementById('email').value.trim() === '' || document.getElementById('name').value.trim() === ''){
      document.getElementById('su').innerText = 'Fill all the fields'
      setTimeout(()=>{
        document.getElementById('su').innerText = 'Submit'
      }, 2000)
    }else{
      console.log(ee);
      document.getElementById('su').innerText = 'SUBMITTED'
    }
    
    // handle submit
  });