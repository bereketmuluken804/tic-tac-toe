
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
                if(box.getAttribute("clicked") != "true"){
                    box.textContent = "Clicked";
                    box.setAttribute("clicked" , "true");
            }
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
