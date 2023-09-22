window.onload = function(){
  try{
      if(localStorage){
          document.getElementById('regristation').addEventListener('submit', function(){
              debugger;
              var username = document.getElementById("firstName").value;
              var lastName = document.getElementById("lastName").value;
              var phone = document.getElementById("PhoneNumber").value;
              var email = document.getElementById("email").value;
              var password = document.getElementById("pass").value;
              var total = 0;

              localStorage.setItem("firstName", username);
              localStorage.setItem("lastName", lastName);
              localStorage.setItem("PhoneNumber", phone);
              localStorage.setItem("email", email);
              localStorage.setItem("pass", password);
              localStorage.setItem("Total", total);
              alert("Successful registration!");
              window.location.replace("../signin.html");
          });
      
      }
  }
  catch(err) {
      document.getElementById("regristation").innerHTML = err.message;
  }   
}


