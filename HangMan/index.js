const img = document.getElementById("img");
const ans = document.getElementById("ans");
const guess = document.getElementById("guess");
const timeLeft = document.getElementById("time-left");
let count =1;
const buttons = document.querySelectorAll(".button");
const letters = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','W','X','Y','Z'];
let ansCount = 1;

img.style.backgroundImage = `url('img/1.png')`;

let min = 2;
let sec = 0;
const interval = setInterval(update, 1000);

function update() {
    if (min === 0 && sec === 0) {
        clearInterval(interval);

        const time = document.createElement("p");
        time.id = "time";
        time.textContent ="Time Finished!!";
        time.style.textAlign = "center";
        document.querySelector(".container2").append(time);

        const result = document.createElement("p");
        result.id = "result";
        result.textContent = "You Lose!!";
        result.style.color = "red";
        result.style.textAlign = "center";
        document.querySelector(".container2").append(result);

        timeLeft.classList.add("blinking");
        disableButtons();
        
    } else {
        if (sec === 0) {
            if (min > 0) {
                min = min - 1;
                sec = 59;
            }
        } else {
            sec = sec - 1;
        }

        const minStr = min.toString().padStart(2, '0');
        const secStr = sec.toString().padStart(2, '0');
        timeLeft.textContent = `${minStr}:${secStr} min`;
    }
}


buttons.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        if(count>=7){
                const result = document.createElement("p");
                result.id = "result";
                result.textContent = "You Lose!!";
                result.style.color = "red";
                result.style.textAlign = "center";
                document.querySelector(".container2").append(result);
                img.style.backgroundImage = `url('img/7.png')`;
                clearInterval(interval);
                timeLeft.classList.add("blinking");
                disableButtons();
            }
        else if( event.target.textContent !== letters[22] && event.target.textContent !== letters[17] && event.target.textContent !== letters[14] && event.target.textContent !== letters[13] && event.target.textContent !== letters[6]){
            count++;
            event.target.style.backgroundColor = 'red';
            img.style.backgroundImage = `url('img/${count}.png')`;
            guess.textContent = `Wrong Guesses: ${count}/7`;
        }
        else {
            if(ansCount === 1){
                if( event.target.textContent !== letters[22]){
                    count++;
                    img.style.backgroundImage = `url('img/${count}.png')`;
                } 
                else{
                    ansCount++;
                    ans.textContent = "W __ __ __ __";
                }
            }
            else if(ansCount === 2){
                if( event.target.textContent !== letters[17]){
                    count++;
                    img.style.backgroundImage = `url('img/${count}.png')`;
                } 
                else{
                    ansCount++;
                    ans.textContent = "W R __ __ __";
                }
            }
            else if(ansCount === 3){
                if( event.target.textContent !== letters[14]){
                    count++;
                    img.style.backgroundImage = `url('img/${count}.png')`;
                } 
                else{
                    ansCount++;
                    ans.textContent = "W R O __ __";
                }
            }
            else if(ansCount === 4){
                if( event.target.textContent !== letters[13]){
                    count++;
                    img.style.backgroundImage = `url('img/${count}.png')`;
                } 
                else{
                    ansCount++;
                    ans.textContent = "W R O N __";
                }
            }
            else if(ansCount === 5){
                if( event.target.textContent !== letters[6]){
                    count++;
                    img.style.backgroundImage = `url('img/${count}.png')`;
                } 
                else{
                    ans.textContent = "W R O N G";
                    const result = document.createElement("p");
                    result.id = "result";
                    result.textContent = "You're Right!!";
                    result.style.color = "green";
                    result.style.textAlign = "center";
                    document.querySelector(".container2").append(result);
                    clearInterval(interval);
                    timeLeft.classList.add("blinking");
                    disableButtons();
                }
            }
        }
    });
});

function disableButtons() { 
    buttons.forEach(button => { 
        button.disabled = true; 
    }); 
}


