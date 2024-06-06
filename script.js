/*declared variables */
let computerScore = 0 
let humanScore = 0 
let getComputerChoice=null
let getHumanChoice=null
let winner=null
let roundNumber = 0
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

function playround (human_choice){
    human_choice=human_choice.toLowerCase()
    let computer_choice = comp_choice()

    if (human_choice===computer_choice) {
        winner="tie"
    } else {
        (rules_matrix[human_choice]===computer_choice)? winner = "human" : winner = "computer"
        
    }
    
    winner==="human" ? result = `${human_choice} beats ${computer_choice}` : 
    result=`${computer_choice} beats ${human_choice}`

    let htmlLog = document.querySelector('#log')

    winner==="tie" ? htmlLog.textContent = ("I`s a tie ") : 
    htmlLog.textContent = (`${winner} wins : ${result}`)

    countScore(winner)


    return winner
}

/// a function that carries the results up until someone gets 5 points
 function countScore(winner) {
    if (winner != 'tie') {
        (winner === 'human') ? humanScore += 1 : computerScore += 1
    }

    let hScore = document.querySelector('#hScore')
    let cScore = document.querySelector('#cScore')
    let round = document.querySelector('#round')
    hScore.textContent = `Human Score: ${humanScore}`
    cScore.textContent = `Computer Score: ${computerScore}`
    roundNumber += 1
    round.textContent = 'Round: '+roundNumber

    if (humanScore === 5 || computerScore === 5) {
        let logcontent = document.querySelector('#log')
        moretext = 'Choose between rock, paper or scissors to play again'

        if (humanScore === 5) {
            logcontent.textContent = 'Human Wins the game! '+ moretext
        }else {
            logcontent.textContent = 'Computer Wins the game! '+moretext
        }
        
        humanScore = 0
        computerScore = 0
        roundNumber = 0
    }



 }
/// Get Buttons from html

let btnsContainer = document.querySelector('#buttons')
btnsContainer.style.margin = '10px'

btnsContainer.addEventListener('click', (event) => {
    let target = event.target 
    switch (target.id) {
        case 'rockBtn':
            playround('rock')
            break
        case 'paperBtn':
            playround('paper')
            break
        case 'scissorsBtn':
            playround('scissors')
            break
    }
})

