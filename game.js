let gameOver = () => {
    alert("You lose.")
}


let startGame = () => {
    alert("The game begins now.")
    alert ("You wake up.")
    let answer = prompt("Do you get out of bed for a shower?")
    if(answer == "yes") {
        alert("You get out of bed to go have a shower.")
            brushteeth()
    }else if(answer == "no") {
        alert("You decide to not have a shower and think you should just wash your face instead.")
        washFace()
    } else {
        alert ("You must input yes or no.")
        alert ("Try again.")
    startGame()
    }
}

let washFace = () => {
    let answer = prompt("Do you wash your face?")
    if(answer == "yes") {
    alert("You decide to wash your face.")
        brushteeth()
    }else if (answer == "no") {
    alert("You choose not to wash your face.")
    gameOver()
    }else {
        alert("You must input yes or no.")
        washFace()
    }
}

let brushteeth = () => {
    let answer = prompt("Do you brush your teeth?")
    if (answer == "yes") {
        alert ("You choose to brush your teeth.")
        breakfast()
    }else if(answer == "no") {
    alert("You dont brush your teeth.")
    gameOver()
    }else {
        alert("You must input yes or no.")
        brushteeth()
    }
}

let breakfast = () => {
    let answer = prompt("What do you have for breakfast? You have a choice of cereal, toast, french toast, pancakes or scrambled eggs.")
    if (answer == "cereal") {
        alert ("You eat your cereal.")
        leaveHouse()
    }else if (answer == "toast") {
        alert("You eat your toast.")
        leaveHouse()
    }else if(answer == "french toast") {
        alert("You eat your french toast.")
        leaveHouse()
    }else if(answer == "pancakes"){
        alert("You have your pancakes.")
        leaveHouse()
    }else if(answer == "scrambled eggs"){
        leaveHouse()
    }else {
        alert("That is not a valid response.")
        breakfast()
    }

}

let leaveHouse = () => {
    let answer = prompt("As you are leaving the house you think if you want to get the tube or a bus")
    if (answer == "the tube") {
        alert("You decide to take the tube.")
        sitOrStand()
    }else if(answer == "the bus"){
        alert("You decide to take the Bus")
            if (x >= 5) {
            alert("As you are waiting for the bus you realize you have forgot your wallet so you end up missing your bus and being late for work.")
            gameOver()
            }else if (x < 5){ 
            alert("You got your bus and made it to work on time.")
            gameWin()}
    }else{
        alert("You must input the bus or the tube.")
        leaveHouse()
    }
}

let sitOrStand = () => {
    let answer = prompt("when you get on the tube. Do you choose to either sit or stand?")
    if(answer == "sit") {
        alert("You choose to sit on the tube rather than stand.")
        alert("You end up falling asleep and missing your stop.")
        gameOver()
    }else if(answer == "stand") {
        alert("You choose to stand on the tube rather than sit.")
        alert("You get to work on time.")
        goForBreak()
    }else {
        alert("You must input sit or stand.")
        sitOrStand()
    }
}

let goForBreak = () => {
    let answer = prompt ("Do you want to go for break yet?")
    if(answer == "yes") {
        alert("You choose to have your break")
        gameWin()
    } else if(answer == "no"){
    alert("You do not go on your break")
    alert("You missed free pizza hour.")
    gameOver()
} else {
    ("You must input yes or no.")
}
}


let gameWin = () => {
    alert("Congrats you got to work on time.")
}


let x = Math.floor(Math.random()*9)