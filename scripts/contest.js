let contestNumber  = document.querySelector("#contest-number");
let contestName  = document.querySelector("#name-input");
let contestStartDate  = document.querySelector("#startDate");
let contestDuration  = document.querySelector("#duration");
let contestDurationAnswering  = document.querySelector("#duration-answering");
let contestStopScoreboard  = document.querySelector("#stopScoreboard");
let contestpenalty = document.querySelector("#penalty-input");
let contestMaxFileSize  = document.querySelector("#maxFileSize");
let contestContectURL  = document.querySelector("#contectURL");
let contestSiteNumber  = document.querySelector("#siteNumber-input");
let contestNameSiteNumerLocal  = document.querySelector("#siteNumer-local");

const activeBTN  = document.querySelector(".activeBTN");
const sendBTN = document.querySelector(".sendBTN");
const clearBTN = document.querySelector(".clearBTN");

const limpiar = () =>{
    contestNumber.value = "";  
    contestName.value = ""; 
    contestStartDate.value = ""; 
    contestDuration.value = ""; 
    contestDurationAnswering.value = "";  
    contestStopScoreboard.value = ""; 
    contestpenalty.value = ""; 
    contestMaxFileSize.value = ""; 
    contestContectURL.value = ""; 
    contestSiteNumber.value = ""; 
    contestNameSiteNumerLocal.value = ""; 
}

const crearData = () =>{
    return{
        contestNumber:contestNumber.value,  
        contestName: contestName.value, 
        contestStartDate: contestStartDate.value, 
        contestDuration: contestDuration.value, 
        contestDurationAnswerin: contestDurationAnswering.value,  
        contestDurationAnswerin: contestStopScoreboard.value, 
        contestpenalty: contestpenalty.value, 
        contestMaxFileSize: contestMaxFileSize.value, 
        contestContectUR: contestContectURL.value, 
        contestSiteNumber: contestSiteNumber.value, 
        contestNameSiteNumerLocal: contestNameSiteNumerLocal.value, 
        }
}

clearBTN.addEventListener("click", (event)=>{
    event.preventDefault();
    limpiar();
})

sendBTN.addEventListener("click", (event)=>{
    event.preventDefault();
    contest.push(crearData());
    limpiar();
})

activeBTN.addEventListener("click", (event)=>{
    event.preventDefault();
    contest.push(crearData());
    limpiar();
})
