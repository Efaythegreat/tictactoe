let xo = "X";
let turns = 0;
let board = {};

function performLogic(button, tile) {
  if (xo === "X") {
    withinLogic("O", tile);
  } else {
    withinLogic("X", tile);
  }
}


function withinLogic(XO, tile) {
  board[tile] = xo;
  $(tile).text(xo);
  turns = turns + 1;
  winCondition();
  xo = XO;
}

function winCondition(tile) {
  if (turns > 8) {
    $(".result").text("Tie");
  }
  
  verticle();
}

function verticle(){
  checkThree("#tile1","#tile4","#tile7");
  checkThree("#tile2","#tile5","#tile8");
  checkThree("#tile7","#tile6","#tile9");
}
function horizontal(){
  checkThree("#tile1","#tile2","#tile3");
  checkThree("#tile4","#tile5","#tile6");
  checkThree("#tile7","#tile8","#tile9");
}
function diagonal(){
  checkThree("#tile1","#tile5","#tile9");
  checkThree("#tile3","#tile5","#tile7");

}


function checkThree(tile1, tile2, tile3) {
  console.log($(tile1).text);
  if (tile1 === xo && tile2 === xo && tile3 === xo) {
    $(".result").text("Player "+ xo + " Wins");
  }
}


$("#button1").click(function() {
  performLogic("#button1", "#tile1");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
});
