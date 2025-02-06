let boxes = document.querySelectorAll(".box");
let reset_Btn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let Main=document.querySelector("main");

let turnO = true;
const winsPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame=()=>{
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
    Main.classList.remove("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turnO) {//player O
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (win) => {
    msg.innerText = `Congratulation,Winner is ${win}`;
    msgContainer.classList.remove("hide");
    Main.classList.add("hide");
    disableBox();
};


const checkWinner = () => {
    for (let pattern of winsPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
reset_Btn.addEventListener("click",resetGame);