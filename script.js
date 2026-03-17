class Player {
    constructor(name, marker){
        this.name = name;
        this.marker = marker;
        this.picked = 0;
        this.turn = false;
    }
}

const PLAYERS = {
    player1 : new Player("Beki", "x"),
    player2 : new Player("Sami", "o")
}

console.log(PLAYERS.player1.marker)