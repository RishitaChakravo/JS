const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const plyScr = document.getElementById("plyScr");
const cmpScr = document.getElementById("cmpScr");
let playerScore = 0;
let computerScore = 0;
let compPick;

plyScr.textContent = `Player Score: ${playerScore}`;
cmpScr.textContent = `Computer Score: ${computerScore}`;

rock.addEventListener("click", event =>{
    compPick = Math.trunc(Math.random()*3 + 1);
    if(compPick === 2){
        result.textContent = "You Win!!";
        result.style.color = "lightgreen";
        playerScore += 1;
        plyScr.textContent = `Player Score: ${playerScore}`;
        player.textContent = `Player: Rock`;
        computer.textContent = `Computer: Paper`;
    }
    else if(compPick === 3){
        result.textContent = "You Lose!!";
        result.style.color = "red";
        computerScore += 1;
        cmpScr.textContent = `Computer Score: ${computerScore}`;
        player.textContent = `Player: Rock`;
        computer.textContent = `Computer: Scissors`;
    }
    else{
        result.textContent = "TIE!!";
        result.style.color = "black";
        player.textContent = `Player: Rock`;
        computer.textContent = `Computer: Rock`; 
    }
});

paper.addEventListener("click", event =>{
    compPick = Math.trunc(Math.random()*3 + 1);
    if(compPick === 1){
        result.textContent = "You Win!!";
        result.style.color = "lightgreen";
        playerScore += 1;
        plyScr.textContent = `Player Score: ${playerScore}`;
        player.textContent = `Player: Paper`;
        computer.textContent = `Computer: Rock`;
    }
    else if(compPick === 3){
        result.textContent = "You Lose!!";
        result.style.color = "red";
        computerScore += 1;
        cmpScr.textContent = `Computer Score: ${computerScore}`;
        player.textContent = `Player: Paper`;
        computer.textContent = `Computer: Scissor`;
    }
    else{
        result.textContent = "TIE!!";
        result.style.color = "black";
        player.textContent = `Player: Paper`;
        computer.textContent = `Computer: Rock`; 
    }
});
scissor.addEventListener("click", event =>{
    compPick = Math.trunc(Math.random()*3 + 1);
    if(compPick === 2){
        result.textContent = "You Win!!";
        result.style.color = "lightgreen";
        playerScore += 1;
        plyScr.textContent = `Player Score: ${playerScore}`;
        player.textContent = `Player: Scissors`;
        computer.textContent = `Computer: Paper`;
    }
    else if(compPick === 1){
        result.textContent = "You Lose!!";
        result.style.color = "red";
        computerScore += 1;
        cmpScr.textContent = `Computer Score: ${computerScore}`;
        player.textContent = `Player: Scissors`;
        computer.textContent = `Computer: Rock`;
    }
    else{
        result.textContent = "TIE!!";
        result.style.color = "black";
        player.textContent = `Player: Scissors`;
        computer.textContent = `Computer: Scissors`; 
    }
});
