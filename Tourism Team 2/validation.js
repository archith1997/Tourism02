// validate entered first name
function validateFirstName() {
   var unInput = document.getElementById("firstName");
   var errorDiv = document.getElementById("firstNameError");
   try {
      //if(unInput.value.length < 4){
      if(/.{2,}/.test(unInput.value) === false){
         throw "First name must be at least 2 charcters long";
      }
      else if(/\W/.test(unInput.value) === true){
         throw "username must contain only letters";
      }

      // remove any username error styling and message
      unInput.style.background = "";
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
   }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      unInput.style.background = "rgb(255,233,233)";
   }
}

// validate entered last name
function validateLasttName() {
    var unInput = document.getElementById("lastName");
    var errorDiv = document.getElementById("lastNameError");
    try {
       //if(unInput.value.length < 4){
       if(/.{2,}/.test(unInput.value) === false){
          throw "Last Name must be at least 2 charcters long";
       }
       else if(/\W/.test(unInput.value) === true){
          throw "username must contain only letters";
       }
 
       // remove any username error styling and message
       unInput.style.background = "";
       errorDiv.style.display = "none";
       errorDiv.innerHTML = "";
    }
    catch(msg) {
       // display error message
       errorDiv.style.display = "block";
       errorDiv.innerHTML = msg;
       // change input style
       unInput.style.background = "rgb(255,233,233)";
    }
 }

// validate entered password
function validatePassword() {
   var pw1Input = document.getElementById("pw1");
   var pw2Input = document.getElementById("pw2");
   var errorDiv = document.getElementById("passwordError");
   try {
      //if(pw1Input.value.length < 8){
      if(/.{8,}/.test(pw1Input.value) === false){
         throw "password must be at least 8 charcters";
      }
      else if(pw1Input.value.localeCompare(pw2Input.value) !== 0){
         throw "passwords must match";
      }
      else if(/[a-zA-z]/.test(pw1Input.value) === false){
         throw "password must contain at least one letter";
      }
      else if(/\d/.test(pw1Input.value) === false){
         throw "password must contain at least one number";
      }
      else if(/[ !@#_]/.test(pw1Input.value) === false){
         throw "password must contain at least on of the following symbols: ! @ # _";
      }

      // remove any password error styling and message
      pw1Input.style.background = "";
      pw2Input.style.background = "";
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
   }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      pw1Input.style.background = "rgb(255,233,233)";
      pw2Input.style.background = "rgb(255,233,233)";      
   }
}

// validate entered email
function validateEmail() {
   var emailInput = document.getElementById("email");
   var errorDiv = document.getElementById("emailError");
   var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
   try {
      if(emailCheck.test(emailInput.value) === false){  
         throw "please provide a valid email address";
      }

      // remove any email error styling and message
      emailInput.style.background = "";
      errorDiv.innerHTML = "";
      errorDiv.style.display = "none";
      // convert email address to lowercase
      emailInput.value = emailInput.value.toLowerCase();
   }
   catch(msg) {
      // display error message
      errorDiv.innerHTML = msg;
      errorDiv.style.display = "block";
      // change input style
      emailInput.style.background = "rgb(255,233,233)";
   }
}

function createEventListeners() {
   var unInput = document.getElementById("firstName");
   var unInput2 = document.getElementById("lastName");
   var pw2Input = document.getElementById("pw2");
   var emailInput = document.getElementById("email");
   if (unInput.addEventListener) {
      unInput.addEventListener("change", validateFirstName, false);
      unInput2.addEventListener("change", validateLasttName, false); 
      pw2Input.addEventListener("change", validatePassword, false); 
      emailInput.addEventListener("change", validateEmail, false); 
   } else if (unInput.attachEvent) {
      unInput.attachEvent("onchange", validateFirstName);
      unInput2.attachEvent("onchange", validateLasttName);
      pw2Input.attachEvent("onchange", validatePassword);
      emailInput.attachEvent("onchange", validateEmail);
   }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}