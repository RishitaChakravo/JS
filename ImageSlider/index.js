const img = document.getElementById("img");
const left = document.getElementById("left");
const right = document.getElementById("right");
let count = 1;

img.style.backgroundImage = `url('img/${count}.png')`;

left.addEventListener("click", (event)=>{
    if(count>1){
        count--;
    }
    else if(count === 1){
        count = 9;
    }
    img.style.backgroundImage = `url('img/${count}.png')`;
    console.log("image add");
});
right.addEventListener("click", (event)=>{
    if(count<9){
        count++;
    }
    else if(count === 9){
        count = 1;
    }
    img.style.backgroundImage = `url('img/${count}.png')`;
    console.log("image add");
});