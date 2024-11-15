function updateClock(){

    const now = new Date(); 
    let hour = now.getHours();
    const meridiem = hour >= 12 ? "PM" : "AM";
    if(meridiem==="PM") hour = hour - 12;
    hour = hour.toString().padStart(2, 0);
    const minute = now.getMinutes().toString().padStart(2, 0);
    const second = now.getSeconds().toString().padStart(2, 0);
    let time = `${hour}:${minute}:${second}${meridiem}`;
    document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);