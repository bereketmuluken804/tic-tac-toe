
const gameboard = document.querySelector("#gameboard")

const gm = (()=>{

    this.board = [];

    for(let i=1; i<10; i++){
        const box = document.createElement("div");
        box.id = i;
        this.board.push(box)
    }

    attachEvent = ()=>{
        for(let box of this.board){
            box.addEventListener('click', ()=>{
                    mark(box); 
            })
        }
    }

    displayGameBoard = ()=>{
        for(let box of this.board){
            gameboard.appendChild(box);
        }
    }

    this.attachEvent();
    this.displayGameBoard()
    return {board}
})();

let currentplayer = "✖️";
// to store player's marked positions
const player = {
    "✖️" : "",
    "⭕" : ""
}

function mark(box){
    if(box.textContent === "" && box.getAttribute("disabled") !== "true"){
        box.textContent = currentplayer;
        player[currentplayer] += box.id;
        if(player[currentplayer].length > 2){
            checkWin(currentplayer);
        }
        currentplayer = (currentplayer === "✖️")? "⭕":"✖️";
    }
}
const winposes = ["123", "456", "789", "147", "258", "369", "159", "357"]
function checkWin(p){
    let player_pos = player[currentplayer]
    let playerWiningPos = '';

    let player_won = winposes.some(winpos=>{
        split_winpos = winpos.split('')
        if(split_winpos.every(pos => player_pos.includes(pos))){
            playerWiningPos = winpos;
        };
        return split_winpos.every(pos => player_pos.includes(pos))
    })
    if(player_won){
        displayWinner(playerWiningPos);
    }
}

function displayWinner(playerWiningPos){
    for(let box of gm.board){
        if(playerWiningPos.includes(box.id)){
            box.classList.add("win");
        }
        box.setAttribute("disabled", "true")
    }
    gm.displayGameBoard();
}