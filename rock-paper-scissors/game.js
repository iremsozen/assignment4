const match = document.querySelector("#match");  
const Playerwin=document.createElement('h1') ;
Playerwin.innerText= "You Win!" ;

const Computerwin=document.createElement('h1') ;
Computerwin.innerText= "Computer Wins!" ;

const tie=document.createElement('h1') ;
tie.innerText= "It is a tie!" ;


  
const options = document.querySelectorAll(".options");
const choices = ["Rock", "Paper", "Scissors"];
function computerPlay() {
   let computerInput = choices[Math.floor(Math.random() * 3)];
   console.log("Computer chooses" + ` ${computerInput}`);
   return computerInput;
}

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent;


    const cInput = computerPlay();

    playRound(pInput, cInput);
    match.textContent = `${pInput} vs ${cInput}`;
  });
});

let userScore = parseInt(0);
let computerScore = parseInt(0);

function playRound(pInput, cInput) {

  
  if (pInput === cInput) {
      document.body.appendChild(tie) ;
    return;
    
  }

  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      userScore++;
      document.body.appendChild(Playerwin) ;
    } else {
      computerScore++;
      document.body.appendChild(Computerwin) ;
    }
  }
  
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      userScore++;
      document.body.appendChild(Playerwin) ;
    } else {
      computerScore++;
      document.body.appendChild(Computerwin) ;
    }
  }
  
  else if (pInput === "Scissors") {
    if (cInput === "Paper") {
      userScore++;
      document.body.appendChild(Playerwin) ;
    } else {
      computerScore++;
      document.body.appendChild(Computerwin) ;
    }
  }
  if(userScore === 5 ){
      alert("Total score of player is 5 so, congrats winner!");
     
  }
  if(computerScore === 5 ){
      alert("Total score of computer is 5! You lost");
     
  }

}