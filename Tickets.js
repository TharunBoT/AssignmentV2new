//References
let date = document.getElementById("date");
let duration = document.getElementById("duration");


//output
let DateOut = document.getElementById("DateOut");
let TimeOut = document.getElementById("TimeOut");
let DurationOut= document.getElementById("DurationOut");
let outSlAdult = document.getElementById("slAdult");
let outSlChild = document.getElementById("slChild");
let outFrAdult = document.getElementById("frAdult");
let outFrChild = document.getElementById("frChild");
let outInfant = document.getElementById("infant");
let contbtn = document.getElementById("contbtn");
let btnStyle = document.getElementById("cont_btn");

//output amount price
let slAdultAmount = document.getElementById("slAdultAmount");
let slChildAmount = document.getElementById("slChildAmount");
let frAdultAmount = document.getElementById("frAdultAmount");
let frChildAmount = document.getElementById("frChildAmount");
let infantAmount = document.getElementById("infantAmount");
let totalOut = document.getElementById("totalOut");

const form = document.getElementById("form");

//event listeners
window.addEventListener("load", init);
form.addEventListener("submit", validationFunction);

date.addEventListener("change", displayReload);
duration.addEventListener("change", displayReload);

outSlAdult.addEventListener("change", displayReload);
outSlChild.addEventListener("change", displayReload);
outFrAdult.addEventListener("change", displayReload);
outFrChild.addEventListener("change", displayReload);
outInfant.addEventListener("change", displayReload);
contbtn.addEventListener("click", displayReload);

function init(){
    contbtn.setAttribute("href", "javascript:void(0);");
}

function validationFunction(event){
    if(!form.checkValidity()){
        event.preventDefault();
        alert("Please Fill Up.");
        btnStyle.style.he;
    }else{
        event.preventDefault();
        contbtn.setAttribute("href", "./Details.html");
        contbtn.click();
    }
}

function displayReload(event){
    DateOut.innerText = date.value;
    localStorage.setItem("date", DateOut.innerText);

    TimeOut.innerText = duration[duration.selectedIndex].innerText;
    localStorage.setItem("time", TimeOut.innerText);

    DurationOut.innerText = `1h`;
    localStorage.setItem("duration", DurationOut.innerText);


    //calculations
    if(duration[duration.selectedIndex].value == "3" ||
    duration[duration.selectedIndex].value == "4" ||
    duration[duration.selectedIndex].value == "5" ||
    duration[duration.selectedIndex].value == "8" ||
    duration[duration.selectedIndex].value == "9" ||
    duration[duration.selectedIndex].value == "10")
    {
        slAdultAmount.innerText = `${localStorage.getItem("SLAA")*6} USD`;
        slChildAmount.innerText = `${localStorage.getItem("SLCA")*3} USD`;
        frAdultAmount.innerText = `${localStorage.getItem("FRA")*13} USD`;
        frChildAmount.innerText = `${localStorage.getItem("FRC")*8} USD`;
        infantAmount.innerText = `FREE`;

        totalOut.innerText = `${(localStorage.getItem("SLAA")*6) + (localStorage.getItem("SLCA")*3) + (localStorage.getItem("FRA")*13) + (localStorage.getItem("FRC")*8) } USD`;
        
    } else{
        slAdultAmount.innerText = `${localStorage.getItem("SLAA")*4} USD`;
        slChildAmount.innerText = `${localStorage.getItem("SLCA")*2} USD`;
        frAdultAmount.innerText = `${localStorage.getItem("FRA")*10} USD`;
        frChildAmount.innerText = `${localStorage.getItem("FRC")*5} USD`;
        infantAmount.innerText = `FREE`;

        totalOut.innerText = `${(localStorage.getItem("SLAA")*4) + (localStorage.getItem("SLCA")*2) + (localStorage.getItem("FRA")*10) + (localStorage.getItem("FRC")*5) } USD`;
    }
    localStorage.setItem("SLAdultAmount", slAdultAmount.innerText);
    localStorage.setItem("SLChildAmount", slChildAmount.innerText);
    localStorage.setItem("FRAdultAmount", frAdultAmount.innerText);
    localStorage.setItem("FRChildAmount", frChildAmount.innerText);
    localStorage.setItem("INfantAmount", infantAmount.innerText);
    localStorage.setItem("Total", totalOut.innerText);

    contbtn.setAttribute("href", "./Details.html");
}



//GUEST SECTION

        //Sri Lankan Adult
        function totalClick(click){

            const totalClicks = document.getElementById('totalClicks');
            const sumvalue1 = parseInt(totalClicks.innerText) + click;
            console.log(sumvalue1 + click);
            totalClicks.innerText = sumvalue1;

            //avoid negative
            if(sumvalue1<0){
                totalClicks.innerText = 0;
            }

            localStorage.setItem("SLAA", sumvalue1);
            outSlAdult.innerText = `${sumvalue1} SL Adult(s)`;
            localStorage.setItem("storeSLA", outSlAdult.innerText);
        }

        //Sri Lankan Child
        function totalClick2(click){
            const totalClicks2 = document.getElementById('totalClicks2');
            const sumvalue2 = parseInt(totalClicks2.innerText) + click;
            console.log(sumvalue2 + click);
            totalClicks2.innerText = sumvalue2;

            localStorage.setItem("SLCA", sumvalue2);
            outSlChild.innerText = `${sumvalue2} SL Children`;
            localStorage.setItem("storeSLC", outSlChild.innerText);

            //avoid negatives
            if(sumvalue2<0){
                totalClicks2.innerText = 0;
            }
        }
        //Foreign Adults
        function totalClick3(click){
            const totalClick3 = document.getElementById('totalClicks3');
            const sumvalue3 = parseInt(totalClick3.innerText)+click;
            console.log(sumvalue3 + click);
            totalClick3.innerText = sumvalue3;

            localStorage.setItem("FRA", sumvalue3);
            outFrAdult.innerText = `${sumvalue3} FR Adult(s)`;
            localStorage.setItem("storeFRA", outFrAdult.innerText);

            if(sumvalue3<0){
                totalClick3.innerText = 0;
            }
        }
        //Foreign Child
        function totalClick4(click){
            const totalClick4 = document.getElementById('totalClicks4');
            const sumvalue4 = parseInt(totalClick4.innerText)+click;
            console.log(sumvalue4 + click);
            totalClick4.innerText = sumvalue4;

            localStorage.setItem("FRC" , sumvalue4);
            outFrChild.innerText = `${sumvalue4} FR Children`;
            localStorage.setItem("storeFRC", outFrChild.innerText);

            if(sumvalue4<0){
                totalClick4.innerText = 0;
            }
        }
        //Infant
        function totalClick5(click){
            const totalClick5 = document.getElementById('totalClicks5');
            const sumvalue5 = parseInt(totalClick5.innerText)+click;
            console.log(sumvalue5 + click);
            totalClick5.innerText = sumvalue5;

            localStorage.setItem("INF", sumvalue5);
            outInfant.innerText = `${sumvalue5} Infant(s)`;
            localStorage.setItem("storeINF", outInfant.innerText);

            if(sumvalue5<0){
                totalClick5.innerText = 0;
            }
        }

        window.addEventListener("beforeunload", function() {
            localStorage.removeItem("SLAA");
            localStorage.removeItem("SLCA");
            localStorage.removeItem("FRA");
            localStorage.removeItem("FRC");
        })

