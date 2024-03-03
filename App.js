let userScore = 0;
let compScore  =0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#meg");
const userScorePara = document.querySelector("#User-Score");
const compScorePara = document.querySelector("#Computer-Score");


const drawGame = () =>{
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw.Play Again";
    msg.style.backgroundColor = "black";
};


const showWinner = (userWin , userChoice , compChoice) => {
    if ( userWin ){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =  `You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    // rock , paper and scissors;
    const options = [ "rock" , "paper" , "scissors"];
    const randId = Math.floor(Math.random()*3);
    return options[randId];
};

const playGame = (userChoice) =>{
    // console.log( " User choice = " , userChoice);
    //Generate Computer choice.
    const compChoice = genCompChoice();
    // console.log("Computer choice = " , compChoice);

    if ( userChoice == compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if ( userChoice === 'rock' ){
            // scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }else if ( userChoice === "paper " ){
            // rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock or paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach( (choice) => {
    // console.log(choice);
    choice.addEventListener( "click" , () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});