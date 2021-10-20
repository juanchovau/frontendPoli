const contestNumber = document.querySelector(".container__primeraSec input");
const contestBTN = document.querySelector(".container__primeraSec button");
const contestInfo = document.querySelector("#contestInfo"); 
const contestIMG = document.querySelector(".containerOptions img");
let constesDB = JSON.parse(window.sessionStorage.getItem('contest'))

const fetchDB = ()=>{
    const contestEncontrado = constesDB.find(contest => contest.contestNumber === contestNumber.value );
    if(contestEncontrado){
        contestInfo.innerHTML =`
        <h2>Información de contest</h2>
        <p><span class="intoTitle">Contest Number:</span> ${contestEncontrado.contestNumber}</p>
        <p><span class="intoTitle">Contest Name:</span> ${contestEncontrado.contestName}</p>
        <p><span class="intoTitle">Contest Start Date:</span> ${contestEncontrado.contestStartDate}</p>
        <p><span class="intoTitle">Contest Duration:</span> ${contestEncontrado.contestDuration}</p>
        <p><span class="intoTitle">Contest Duration Answeringn:</span> ${contestEncontrado.contestDurationAnswering}</p>
        <p><span class="intoTitle">Contest Duration Stop Scoreboard:</span> ${contestEncontrado.contestDurationStopScoreboar}</p>
        <p><span class="intoTitle">Contest Penalty:</span> ${contestEncontrado.contestpenalty}</p>
        <p><span class="intoTitle">Contest Max File Size:</span> ${contestEncontrado.contestMaxFileSize}</p>
        <p><span class="intoTitle">Contest URl:</span> ${contestEncontrado.contestContectUR}</p>
        <p><span class="intoTitle">Contest Site Number:</span> ${contestEncontrado.contestSiteNumber}</p>
        <p><span class="intoTitle">Contest Site Numer Local:</span> ${contestEncontrado.contestNameSiteNumerLocal}</p>
        `;
        contestInfo.style.display = "block";
        contestIMG.style.display = "none";
    }else{
    contestNumber.value = "";
    alert("Contest no encontrado");
    }
};

contestNumber.addEventListener("input", ()=>{
    if(contestNumber.value !== ""){
        contestBTN.style.display = "block"
    }
});

contestBTN.addEventListener("click", ()=>{
    fetchDB();
});
