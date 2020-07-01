var dob = document.getElementById("dob").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var errorDiv = document.getElementById("error");

function checkValueFN(){
    var firstName = document.getElementById("firstName").value;
    if(firstName.length < 2){
        errorDiv.innerHTML = "Plese enter a real name!!";
    }
    else if(firstName.length >= 2){
        errorDiv.innerHTML = "";
    }
}

function checkValueLN(){
    var lastName = document.getElementById("lastName").value;
    if(lastName.length < 2){
        errorDiv.innerHTML = "Plese enter a real name!!";
    }
    else if(lastName.length >= 2){
        errorDiv.innerHTML = "";
    }
}

function checkValueS(){
    var state = document.getElementById("state").value;
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
        errorDiv.innerHTML = "Enter a real State please!!";
    }
}


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