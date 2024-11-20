const Box = document.getElementById("myBox");
const moveAmount = 10;
let x=0;
let y=0;

Box.addEventListener("click", (event)=>{
    event.target.style.backgroundColor = "coral";
    event.target.textContent = "Ouch! 🤕";
});

Box.addEventListener("mouseover", (event)=>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't Do It!! 😵";
});

Box.addEventListener("mouseout", (event)=>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😄";
});

document.addEventListener("keydown", event =>{

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;            
        }
    }
    Box.style.top = `${y}px`;
    Box.style.left = `${x}px`; 
});