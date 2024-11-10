let changeColor = document.getElementById("submit");
let color = document.getElementById("color");
const arr = ["Red", "White", "Green", "Blue", "Indigo", "Yellow", "Orange", "Grey", "Pink", "Purple", "Violet", "Cyan", "Magenta", "Maroon", "Gold"];
let random;

changeColor.onclick = function (){
    random = Math.trunc(Math.random()*15);
    document.body.style.backgroundColor = `${arr[random]}`;
    color.textContent = `Background Color: ${arr[random]}`;
}

