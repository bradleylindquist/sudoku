var numSelected = null;
var tileSelected = null;

var error = 0;

// var board = [
//   "--EKTLU-Q",
//   "I---U-N-T",
//   "-U---E-L-",
//   "-QSU----K",
//   "--N----T-",
//   "--UI--LSE",
//   "T-K-E---I",
//   "UE-SN----",
//   "SL--KQ---",
// ];

var board = [
  "--74916-5",
  "2---6-3-9",
  "-6---7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

// var solution = [
//   "NSEKTLUIQ",
//   "IKLQUSNET",
//   "QUTNIEKLS",
//   "EQSULTINK",
//   "LINESKQTU",
//   "KTUIQNLSE",
//   "TNKLEUSQI",
//   "UEQSNITKL",
//   "SLITKQEUN",
// ];

var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

window.onload = function () {
  setGame();
};

const numberToLetterMap = {
  1: "L",
  2: "I",
  3: "N",
  4: "K",
  5: "Q",
  6: "U",
  7: "E",
  8: "S",
  9: "T",
};

function setGame() {
  // letters L-T
  for (let i = 1; i <= 9; i++) {
    //<div id="1"></div>
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  // board 9x9
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (board[r][c] !== "-") {
        tile.innerText = board[r][c];
        tile.classList.add("tile-start");
      }
      if (r === 2 || r === 5) {
        tile.classList.add("horizontal-line-bottom");
      }
      if (r === 3 || r === 6) {
        tile.classList.add("horizontal-line-top");
      }
      if (c === 2 || c === 5) {
        tile.classList.add("vertical-line-right");
      }
      if (c === 3 || c === 6) {
        tile.classList.add("vertical-line-left");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function selectTile() {
  if (numSelected) {
    if (this.innerText !== "") {
      return;
    }

    // 0-0, 0-1, 0-2
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[r][c] === numSelected.id) {
      this.innerText = numSelected.id;
    } else {
      error += 1;
      document.getElementById("errors").innerText = error;
    }
  }
}
