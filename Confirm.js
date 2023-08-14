//summary table Amount
let nameOut = document.getElementById("nameOut");
nameOut.innerText = localStorage.getItem("Fname");

let pnumberOut = document.getElementById("pnumberOut");
pnumberOut.innerText = localStorage.getItem("Pnumber");

let emailOut = document.getElementById("emailOut");
emailOut.innerText = localStorage.getItem("email");

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