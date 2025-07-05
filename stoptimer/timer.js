const currentTime = document.querySelector(".paragraph");
const buttonParent = document.querySelector(".btn-container");

let sec=0;
let min =0;
let hour =0;
let timerid;
function handleButton(event){
    const button =event.target.name;
    if (button === "start"){
        timerid=setInterval(() => {
            sec++;
            if (sec > 58){
                sec=0;
                min++;
                if (min > 58){
                    min =0;
                    hour++
                }
            }
            currentTime.innerText = `${hour < 10 ? `0${hour}`: hour}: ${min<10? `0${min}`:min}: ${sec<10 ? `0${sec}`:sec}`;
        },1);
    }
    if (button === 'stop'){
        clearInterval(timerid);
    }
    if (button === 'reset'){
        clearInterval(timerid);
        sec = min = hour =0
        currentTime.innerText = `${hour < 10 ? `0${hour}`: hour}: ${min<10? `0${min}`:min}: ${sec<10 ? `0${sec}`:sec}`;

    }

}


buttonParent.addEventListener("click",handleButton)