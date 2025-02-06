let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
  const randIdx= Math.floor(Math.random()*3) ;
  return options[randIdx];
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`you Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you Lose");
        msg.innerText=`you Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    // console.log("User_choice=",userChoice);
    //Generate computer choice:::
    const compChoice=genCompChoice();
    // console.log("comp choice=",compChoice);

    if(userChoice===compChoice)
    {
        // console.log("draw game");//This game are draw
        msg.innerText="Game Was Draw";
        msg.style.backgroundColor="white";
        msg.style.color="black";
        msg.style.border="2px solid black";
        msg.style.backgroundColor="gray";
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //paper,scissors
          userWin = compChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin = compChoice==="scissors"? false : true;
        }else{
            //rock,paper
            userWin = compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})