console.log("Hello!")
for (let x=0; x<10; x++){
    console.log(x)
}

//Node provides Java script run time
//Node prints java script in the terminal, meaning there's no need to create a HTML to view your code
//Click 'up arrow' to get a previous command - in this case it runs the 'node index.js', so there's no need to retype to view your work

// To create json package type in 'npm init' and specify the name & type in yes OR type npm init -y (which is yes to everything)
// Go to package.json to make changes to the script
// 'npm intall chalk' will create package-lock.json - type in >"start": "node index.js",< in the debug section in the script
// type in 'npm start' to print
// type in 'install colors' to downolad package (package-lock.json is created with dependencies)
// type in code below:

const colors = require("colors")
console.log("Hello World".rainbow)

//npm start will print a rainbow coloured Hello World in terminal
//modules are other people code, such as a package of colors we used
//npmjs.com - all modules (code packages) are there 
//express is a module that handles the HTTP responses; it's the E in MERN 


///TASK
// https://www.npmjs.com/package/colors
// print 3 lines
// one with coloured text
// one with coloured background
// one with both text and background
// print 1 - 100 with random colours

console.log("Coloured text".red)
console.log("Coloured background".bgGreen)
console.log("Coloured text and background".bgWhite.blue)

for (let y=0; y<=100; y++){
    console.log(`${y}`.random)
}

// remake fizzbuzzzing but..
// mutltiple of 3 says fizz in red
// mutltiple of 5 says buzz in green
// mutltiple of 7 says zing in blue

for (let i=0; i<100; i++){

if (i % 3 === 0){
    console.log ("Fizz".red)
}
else if (i % 5 === 0){
    console.log ("Buzz".green)
}
else if(i % 7 === 0){
    console.log ("Zing".blue)
}
else{
    console.log(i)
}
}

// single player rock paper scissors
// Math.random() for computer
// prompt-sync is the module name for inputs https://www.npmjs.com/package/prompt-sync

const promptSync = require('prompt-sync');
const prompt = promptSync();

let playerChoice = prompt("Choose rock, paper or scissors: ");
if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1){
        computerChoice = "rock"
    }else if (computerChoice === 2){
        computerChoice = "paper"
    }else if (computerChoice === 3){
        computerChoice - "scissors"
    }
    
    if (playerChoice === computerChoice){
        console.log("Tie")
    }else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")){
        console.log("Computer wins")
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")){
        console.log("You win")
    }
    }
    
// ext add colour
// add lizard and spock




