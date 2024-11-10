let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let result = document.getElementById("result");
let count = 0;

decrease.onclick = function (){
    count -= 1;
    result.innerHTML = count;
}
increase.onclick = function(){
    count += 1;
    result.innerHTML= count;
}
reset.onclick = function (){
    count =0;
    result.innerHTML = count;
}