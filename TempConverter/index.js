
let ctof = document.getElementById("ctof");
let ftoc = document.getElementById("ftoc");
let submit = document.getElementById("submit");
let ans = document.getElementById("ans");


submit.onclick = function(){
    let result = document.getElementById("result").value;
    let temp ;
    let temper = Number(result);
    if(ctof.checked){
        temp = 1.8*temper + 32;
        ans.textContent = `${temp.toFixed(2)}°F`;
    }
    else if(ftoc.checked){
        temp = 5(temper-32) / 9;
        ans.textContent = `${temp.toFixed(2)}°C`;
    }
    else if(!(ftoc.checked) && !(ctof.checked)){
        window.alert("Select a radio button");
    }   
}

