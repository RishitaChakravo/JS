
const grids = document.querySelectorAll(".grid");
let result = document.getElementById("result");

let player1 = [];
let player2 = [];
let ply1 = true;
let ply2 = false;

function winningClass(array){
    const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    for(let winningCombination of winningCombinations){
        if(winningCombination.every(val => array.includes(val))){
            return true;
        }
    }
    return false;
}

grids.forEach((grid, index) =>{
    grid.addEventListener("click", event =>{
        if(ply1){
            event.target.textContent = "X";
            ply2 = true;
            ply1 = false;
            player1.push(index);
            if(winningClass(player1)){
                result.textContent = "Player1 Wins!!";
            }
        }
        else if(ply2){
            event.target.textContent = "O";
            ply2 = false;
            ply1 = true;
            player2.push(index);
            if(winningClass(player2)){
                result.textContent = "Player2 Wins!!";
            }
        }
    });
});

console.log(player1);
console.log(player2);

const reset =document.getElementById("reset");

reset.onclick = function remove(){
    grids.forEach(grid => {
        grid.textContent = " ";
        player1.length = 0;
        player2.length = 0;
        ply1 = true;
        ply2 = false;
        result.textContent = "";
    });
}

