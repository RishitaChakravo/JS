const stopwatch = document.getElementById("stopwatch");
let timer = null;
let startTime= 0;
let elapsedTime = 0;
let isWorking = false;
function start(){
    if(!isWorking){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isWorking = true;
    }
}
function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isWorking = false;
    stopwatch.textContent = `00:00:00:00`;
}
function update(){
    elapsedTime = Date.now()- startTime;
    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minute = Math.floor(elapsedTime / (1000 * 60) %60);
    let second = Math.floor(elapsedTime / (1000) % 60);
    let millisecond = Math.floor(elapsedTime % (100));

    hour = hour.toString().padStart(2, 0);
    minute = minute.toString().padStart(2, 0);
    second = second.toString().padStart(2, 0);
    millisecond = millisecond.toString().padStart(2, 0);
    stopwatch.textContent = `${hour}:${minute}:${second}:${millisecond}`;
}