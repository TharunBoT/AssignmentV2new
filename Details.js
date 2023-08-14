//summary table Amount
let outDate = document.getElementById("DateOut");
outDate.innerText = localStorage.getItem("date");

let TimeOut = document.getElementById("TimeOut");
TimeOut.innerText = localStorage.getItem("time");

let DurationOut = document.getElementById("DurationOut");
DurationOut.innerText = localStorage.getItem("duration");

let slAdult = document.getElementById("slAdult");
slAdult.innerText = localStorage.getItem("storeSLA");

let slChild = document.getElementById("slChild");
slChild.innerText = localStorage.getItem("storeSLC");

let frAdult = document.getElementById("frAdult");
frAdult.innerText = localStorage.getItem("storeFRA");

let frChild = document.getElementById("frChild");
frChild.innerText = localStorage.getItem("storeFRC");

let infant = document.getElementById("infant");
infant.innerText = localStorage.getItem("storeINF");

//summary table Prices
let slAdultAmount = document.getElementById("slAdultAmount");
slAdultAmount.innerText = localStorage.getItem("SLAdultAmount");

let slChildAmount = document.getElementById("slChildAmount");
slChildAmount.innerText = localStorage.getItem("SLChildAmount");

let frAdultAmount = document.getElementById("frAdultAmount");
frAdultAmount.innerText = localStorage.getItem("FRAdultAmount");

let frChildAmount = document.getElementById("frChildAmount");
frChildAmount.innerText = localStorage.getItem("FRChildAmount");

let infantAmount = document.getElementById("infantAmount");
infantAmount.innerText = localStorage.getItem("INfantAmount");

let totalOut = document.getElementById("totalOut");
totalOut.innerText = localStorage.getItem("Total");

//new inputs
let Fname = document.getElementById("name");
let outputTel= document.getElementById("outputTel");
let country = document.getElementById("country");
let Email = document.getElementById("email");
let Cemail = document.getElementById("cemail");

const form = document.getElementById("form");
let nav = document.getElementById("href");
let contbtn = document.getElementById("contbtn");

//event listeners
window.addEventListener("load", init);
form.addEventListener("input", fillupInfo);
contbtn.addEventListener("click", navigation);


//functions
function init(){
    nav.setAttribute("href", "");
    fillupInfo();
}

function navigation(event){
    if(form.checkValidity() && Email.value === Cemail.value){
        event.preventDefault();
        nav.setAttribute("href", "./Payment.html");
        nav.click();
    }else{
        if(Email.value != Cemail.value){
            event.preventDefault();
        }
    }
}
function fillupInfo(){
    if(form.checkValidity() && Email.value === Cemail.value)
    {
        nav.setAttribute("href", "./Payment.html");
        localStorage.setItem("Fname", Fname.value);
        localStorage.setItem("countryCode", country[country.selectedIndex].value);
        localStorage.setItem("Pnumber", outputTel.value);
        localStorage.setItem("email", Email.value);
    }else{
        if(Email.value != Cemail.value)
        {
            Cemail.style.color="red";
        }else{
            nav.setAttribute("href", "");
        }
    }
}



function countryCode(){
    var val = document.getElementById("country").value;

    if(val === "select country"){
        document.getElementById("output").value = "";
    }
    else if(val === "SL"){
        document.getElementById("outputTel").value = "+94";
    }
    else if(val === "IND"){
        document.getElementById("outputTel").value = "+91";
    }
    else if(val === "USA"){
        document.getElementById("outputTel").value = "+1";
    }
    else if(val === "RUS"){
        document.getElementById("outputTel").value = "011 +7";
    }
    else if(val === "AUS"){
        document.getElementById("outputTel").value = "+61";
    }
    else if(val === "PAK"){
        document.getElementById("outputTel").value = "+92";
    }
}