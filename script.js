/*declared variables */
let computerScore = 0 
let humanScore = 0 
let getComputerChoice=null
let getHumanChoice=null
let winner=null
const rules_matrix = {
    "paper":"rock",
    "rock":"scissors",
    "scissors":"paper"
}


/*Function that gets the computer choice between paper, rock, scissors */
function comp_choice(){
    comp_val = Math.random()
    if (comp_val <= 2/3) {
        if (comp_val <= 1/3) {
            c_choice = "scissors"
        }else {
            c_choice = "rock"
        }
    } else {
        c_choice = "paper"
    }
    return c_choice
}

/*Function to calculate the winner given both the computer choice and the human choice as arguments for the function.
It must also sum up the total winner score (the sum of the score of each player from all the games played). At the end it logs 
a message announcing the winner and why dis he won (ej. "paper beats rock ") */

function playround (human_choice,computer_choice){
    human_choice=human_choice.toLowerCase()
    if (human_choice===computer_choice) {
        winner="tie"
    } else {
        (rules_matrix[human_choice]===computer_choice)? winner = "human" : winner = "computer"
        
    }
    
    winner==="human" ? result= `${human_choice} beats ${computer_choice}` : result=`${computer_choice} beats ${human_choice}`
    winner==="tie" ? console.log("I`s a tie ") : console.log(`${winner} wins : ${result}`)
    return winner
}
/*Function that plays five rounds and gets the total score of these rounds*/
function playgame() {
    humanScore = 0
    computerScore = 0

    for (let i = 0; i<5;i++) {
        console.log(" ")
        console.log('Round Number ',i+1)

        getComputerChoice=comp_choice()
        getHumanChoice = prompt(`Round ${i+1} / Choose between: paper, rock, scissors`)
        winner = playround(getHumanChoice,getComputerChoice)

        if (!(winner==="tie")){ 
            winner==="human" ? humanScore+=1 : computerScore+=1}

        console.log('human score: ',humanScore,' computer score: ',computerScore)
    }

   let twinner='tie'
    if (!(humanScore===computerScore)){ 
        twinner= (humanScore>computerScore) ? "human" : "computer"
    }

    let w_message= !(twinner==="tie") ? `${twinner} wins the game`: "i`ts a tie"
    console.log('The game has ended. ',w_message)
}


playgame()/



