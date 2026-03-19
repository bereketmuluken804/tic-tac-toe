
const gameboard = document.querySelector("#gameboard")
const result = document.querySelector("h2")
const gm = (()=>{

    const board = [];

    for(let i=1; i<10; i++){
        const box = document.createElement("div");
        box.id = i;
        board.push(box)
    }

    attachEvent = ()=>{
        for(let box of board){
            box.addEventListener('click', ()=>{
                    mark(box); 
            })
        }
    }

    displayGameBoard = ()=>{
        for(let box of board){
            gameboard.appendChild(box);
        }
    }

    attachEvent();
    displayGameBoard()
    return {board}
})();

let currentplayer = "✖️";
// to store player's marked positions
let player = {
    "✖️" : "",
    "⭕" : ""
}

function mark(box){
    if(box.textContent === "" && box.getAttribute("disabled") !== "true"){
        box.textContent = currentplayer;
        player[currentplayer] += box.id;
        if(player[currentplayer].length > 2){
            checkWin();
        }
        currentplayer = (currentplayer === "✖️")? "⭕":"✖️";
    }
}
const winposes = ["123", "456", "789", "147", "258", "369", "159", "357"]
function checkWin(){
    let player_pos = player[currentplayer]
    let playerWiningPos = '';

    let player_won = winposes.some(winpos=>{
        let split_winpos = winpos.split('')
        if(split_winpos.every(pos => player_pos.includes(pos))){
            playerWiningPos = winpos;
        };
        return split_winpos.every(pos => player_pos.includes(pos))
    })
    if(player_won){
        displayWinner(playerWiningPos);
        result.textContent = `${currentplayer} Wins`
    }
    if(player["✖️"].length === 5 && !player_won){
        result.textContent= `Draw!`
        displayDraw();
    }
}

function displayWinner(playerWiningPos){
    for(let box of gm.board){
        if(playerWiningPos.includes(box.id)){
            box.classList.add("win");
        }
        box.setAttribute("disabled", "true")
    }
}

function displayDraw(){
    for(let box of gm.board){
        box.classList.add("draw");
    }
}
const btn = document.querySelector("button");

btn.addEventListener('click', ()=>{
    result.textContent = "Result";
    for(let box of gm.board){
        box.classList.remove("draw");
        box.classList.remove("win");
        box.setAttribute("disabled", "false");
        box.textContent = "";
        currentplayer = "✖️";
        player = {
            "✖️" : "",
            "⭕" : ""
        }

    }
})