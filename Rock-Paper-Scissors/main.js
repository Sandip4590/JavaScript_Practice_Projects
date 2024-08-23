

let userValue = 0;
let compValue = 0;



// const user = document.getElementsByid("usr");
// const comp = document.getElementById("comp");
const choices = document.querySelectorAll(".choices")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex]; 

    
}
const showWinner = (winner) => {
    if(winner){
        document.getElementById("msg").innerText = "User is Win"
        userValue++;
        document.getElementById("usr").innerText = userValue;
        document.getElementById("msg").style.backgroundColor = "green"


    }else{
        document.getElementById("msg").innerText = "Computer is Win"
        compValue++;
        document.getElementById("comp").innerText = compValue;
        document.getElementById("msg").style.backgroundColor = "red"

    }

}

const playGame = (usrChoice) => {
  
   
     const compChoice = genCompChoice();

     

     if(usrChoice === compChoice){
        document.getElementById("msg").innerText = "The game is draw"
     }else{
        let winner = true;
        if(usrChoice === "paper"){
             winner = compChoice ==="scissors" ? false : true
             console.log("winner" , winner, compChoice);

        }else if(usrChoice === "rock"){
            winner = compChoice ==="paper" ? false : true
            console.log("winner" , winner, compChoice);

        }else{
            winner = compChoice === "rock" ? false: true
        }
        showWinner(winner);

     }

}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let usrChoice = choice.getAttribute("id");
        playGame(usrChoice);
        
        
    })
})

