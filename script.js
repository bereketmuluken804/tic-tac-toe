
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
                    mark(box)  
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

})();

let currentplayer = "x";
// to store player's marked positions
const player = {
    "x" : "",
    "o" : ""
}

function mark(box){
    if(box.textContent === ""){
        box.textContent = currentplayer;
        player[currentplayer] += box.id;
        if(player[currentplayer].length > 2){
            checkWin(currentplayer);
        }
        
        currentplayer = (currentplayer === "x")? "o":"x";
    }
}
const winposes = ["123", "456", "789", "147", "258", "369", "159", "357"]
function checkWin(p){
    let player_pos = player[currentplayer]

    let player_won = winposes.some(winpos=>{
        split_winpos = winpos.split('')
        return split_winpos.every(pos => player_pos.includes(pos));
    })
    if(player_won)
        alert(`${currentplayer} Won`);
}
