var errorDiv = document.getElementById("error");

//validation for first name
function checkValueFN(){
    //first name var
    var firstName = document.getElementById("firstName").value;
    if(firstName.length < 2){
        errorDiv.innerHTML = "Please provide a valid first name!!";
    }
    else if(firstName.length >= 2){
        errorDiv.innerHTML = "";
    }
}

//validation for last name
function checkValueLN(){
    //last name var
    var lastName = document.getElementById("lastName").value;
    if(lastName.length < 2){
        errorDiv.innerHTML = "Please provide a valid last name!!";
    }
    else if(lastName.length >= 2){
        errorDiv.innerHTML = "";
    }
}

//validation for state
function checkValueS(){
    //input state var
    var state = document.getElementById("state").value;
    //US states var
    var states = [
        'Arizona', 'Alabama', 'Alaska',
        'Arkansas', 'California','Colorado',
        'Connecticut', 'Delaware', 'Florida', 
        'Georgia', 'Hawaii', 'Idaho', 
        'Illinois', 'Indiana', 'Iowa', 
        'Kansas', 'Kentucky', 'Louisiana', 
        'Maine', 'Maryland', 'Massachusetts', 
        'Michigan', 'Minnesota', 'Mississippi', 
        'Missouri', 'Montana', 'Nebraska',
        'Nevada', 'New Hampshire', 'New Jersey', 
        'New Mexico', 'New York', 'North Carolina', 
        'North Dakota', 'Ohio', 'Oklahoma', 
        'Oregon', 'Pennsylvania', 'Rhode Island', 
        'South Carolina', 'South Dakota', 'Tennessee', 
        'Texas', 'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ]
    if(states.includes(state)){
        errorDiv.innerHTML = "";
    }
    else{
        errorDiv.innerHTML = "Please provide a valid State";
    }
}

function checkValueE(){
    var email = document.getElementById("email").value;

    if(email.includes("@") && email.includes(".") && email.length > 10 && email.charAt(0) !== "@" && email.charAt(0) !== "."){  
        errorDiv.innerHTML = "";
    }
    else{
        errorDiv.innerHTML = "Please provide a valid email address";
    }
}

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}   

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } 
    else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }       

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } 
    else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } 
    else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }  
    else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

//when change
var fnInput = document.getElementById("firstName");
if (fnInput.addEventListener){
    fnInput.addEventListener("change", checkValueFN, false); 
} 
else if(fnInput.attachEvent){
    fnInput.attachEvent("onchange", checkValueFN);
}

var lnInput = document.getElementById("lastName");
if (lnInput.addEventListener){
    lnInput.addEventListener("change", checkValueLN, false); 
} 
else if(lnInput.attachEvent){
    lnInput.attachEvent("onchange", checkValueLN);
}

var sInput = document.getElementById("state");
if(sInput.addEventListener){
    sInput.addEventListener("change", checkValueS, false);
}
else if(sInput.attachEvent){
    sInput.attachEvent("onchange", checkValueS);
}
