'use strict';

const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const clockFace = document.querySelector('.js-time');

const laps = {
    id: null,
    startTime: null,
    isActive: false,
    deltaTime: 0,
    laps: [],
    start(){
        if(this.isActive) return;

        this.isActive = true;
        this.startTime = Date.now() - this.deltaTime;
        console.log(this.startTime),

        this.id = setInterval(() => {
            const currentTime = Date.now();
            this.deltaTime = currentTime - this.startTime;

            
            updateClockFace(this.deltaTime);
        }, 100)

    },
    stop(){
        clearInterval(this.id);
        this.isActive = false;
    },
    reset(){
        clearInterval(this.id);
        this.deltaTime = 0;
        updateClockFace(this.deltaTime);
        this.isActive = false;
    },

    lap(){
        const lapTime = formatTime(this.deltaTime);
        this.laps.push(lapTime);
        
        console.log(this.laps);
        const ul = document.querySelector('.js-laps');

        console.log(this.laps);
        const li = document.createElement('li');
        li.textContent = this.laps[this.laps.length -1];
 
    ul.appendChild(li);
   
   return ul;
    },
};

function updateClockFace (time) {
    const formattedTime = formatTime(time);
    clockFace.textContent = formattedTime;
}

function formatTime (ms){
    const newDate = new Date(ms);

    let minutes = newDate.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = newDate.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;


    const mseconds = String(newDate.getMilliseconds()).slice(0, 1);

    return`${minutes}:${seconds}.${mseconds}`;
}

startBtn.addEventListener('click', handleStartBtnClick);
lapBtn.addEventListener('click', handleLapBtnClick);
resetBtn.addEventListener('click', handleResetBtnClick);

function handleStartBtnClick(){
    if(!laps.isActive){
        laps.start();
        this.textContent = 'Pause';
    } else{
        laps.stop();
        this.textContent = 'Continue';
    };
}
function handleResetBtnClick(){
    laps.reset();
    startBtn.textContent = 'Start';
}

function handleLapBtnClick(){
   laps.lap();
}













