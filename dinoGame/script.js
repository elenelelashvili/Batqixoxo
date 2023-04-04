let container = document.getElementById("#container");
let batqi = document.getElementById("batqi");
let sky = document.getElementById("sky");
let road = document.getElementById("road");
let chuu = document.getElementById("chuu");
let score = document.getElementById("score");
let click = 0;
let myAudio = new Audio("audio.mp3");
let interval = null;
let playerScore = 0;



let scoreCounter = ()=>{
    playerScore++;
    score.innerHTML = `Score: <b>${playerScore}</b>`;
}

interval = setInterval(scoreCounter,200);


window.addEventListener("keydown", (start)=>{

    if(start.code == "Space"){
        sky.classList.add("skyActive");
        road.firstElementChild.style.animation = "animateRoad 1.5s linear infinite";
        chuu.style.animation = "animateChuu 2.5s linear infinite";
        

        setTimeout(()=>{
            if(myAudio.currentTime == 0 || myAudio.ended) {
                myAudio.play();
             } 
        },1500);

       
    
    }

    
})


window.addEventListener("keydown", (e)=>{
    if (e.key ="ArrowUp"){

        if(!batqi.classList.contains("batqiActive")){
            batqi.classList.add("batqiActive");

            setTimeout(()=>{
                batqi.classList.remove("batqiActive");
                
            },500);
        }
    }
})


let result = setInterval(()=>{
    let batqiBottom = parseInt(getComputedStyle(batqi).getPropertyValue("bottom"));


    let skyLeft = parseInt(getComputedStyle(sky).getPropertyValue("left"));
    
    if(batqiBottom<=115 && skyLeft>=0 && skyLeft<=80){
        alert("Game over");

        window.location.href="https://www.youtube.com/watch?v=fgyqYVpCm-g";
    }
})