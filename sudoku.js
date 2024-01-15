var numSelected = null;
var tileSelected = null;

var error = 0;

var board = [
  "--EKTLU-Q",
  "I---U-N-T",
  "-U---E-L-",
  "-QSU----K",
  "--N----T-",
  "--UI--LSE",
  "T-K-E---I",
  "UE-SN----",
  "SL--KQ---",
];

var solution = [
  "NSEKTLUIQ",
  "IKLQUSNET",
  "QUTNIEKLS",
  "EQSULTINK",
  "LINESKQTU",
  "KTUIQNLSE",
  "TNKLEUSQI",
  "UEQSNITKL",
  "SLITKQEUN",
];

window.onload = function () {
  setGame();
};

function setGame() {
  // letters L-T
  for (let i = 1; i <= 9; i++) {
    //<div id="1"></div>
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener('click', selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  // board 9x9
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

function selectNumber({

})
