
const gameboard = document.querySelector("#gameboard")

class GameBoard {
    constructor(){
        this.board = [];

        for(let i=1; i<10; i++){
            const box = document.createElement("div");
            box.id = i;
            this.board.push(box)
        }
        this.attachevent();
        this.displayGameBoard()
    }
    attachevent(){
        for(let box of this.board){
            box.addEventListener('click', ()=>{
                    mark(box)
            })
        }
    }

    displayGameBoard(){
        for(let box of this.board){
            gameboard.appendChild(box);
        }
    }

}

const g1 = new GameBoard();
let currentplayer = "x";

function mark(box){
    if(box.textContent === ""){
    box.textContent = currentplayer;
    currentplayer = (currentplayer === "x")? "o":"x";
}
}