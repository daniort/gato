//none of that fancy stuff
function Game() {
  document.getElementById("demo").innerHTML = "Jugando";
    this.gameOn = true;
    this.history = [[],[]];
    this.clicked = (tile, player) => {
        this.history[player].push(tile);
        this.checkWinner(player);
    };
    this.checkWinner = (player) => {
     x = this.history[player];
        if (x.includes(1) && x.includes(2) && x.includes(3) || x.includes(1) && x.includes(5) && x.includes(9) || x.includes(1) && x.includes(4) && x.includes(7) || x.includes(2) && x.includes(5) && x.includes(8) || x.includes(3) && x.includes(5) && x.includes(7) || x.includes(3) && x.includes(6) && x.includes(9) || x.includes(4) && x.includes(5) && x.includes(6) || x.includes(7) && x.includes(8) && x.includes(9)) {
            this.winner(player);
            this.gameOn = false;
        }
    }
    this.winner = (player) => {
    if(player == 0) {

      //alert("winner is X");
      document.getElementById("demo").innerHTML = "Ganó X!";

    }
    else{
      //alert("winner is 0");
      document.getElementById("demo").innerHTML = "Ganó 0!";
    }

    }
}
var newGame = new Game();
function imprSelec(nombre) {
	  var ficha = document.getElementById(nombre);
	  var ventimp = window.open(' ', 'popimpr');
	  ventimp.document.write( ficha.innerHTML );
	  ventimp.document.close();
	  ventimp.print( );
	  ventimp.close();
	}
