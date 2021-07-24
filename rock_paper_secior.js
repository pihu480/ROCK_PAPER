function  win(){  
console.log('You win!')
}
function lose(){

console.log ('You lose!')}

while(true){
let readlineSync = require("readline-sync");    
var player_choice = readlineSync.question('What do you pick? (rock, paper, scissors)')

// player_choice.strip()
var random_move = (0, 2)
var moves = ['rock', 'paper', 'scissors']
var computer_choice = moves[random_move]


if (player_choice == computer_choice){
    console.log ('Draw!');
}
else if  (player_choice== 'rock' &&  computer_choice== 'scissors'){
    win()
}
else if  (player_choice== 'paper' && computer_choice == 'scissors'){
    lose()
}
else if (player_choice == 'scissors' && computer_choice == 'paper'){
    win()
}
else if (player_choice == 'scissors' && computer_choice == 'rock'){
    lose()
}

else if (player_choice == 'paper' && computer_choice == 'rock'){

    win()
}
else if (player_choice == 'paper' && computer_choice == 'scissors'){

    lose()
}
var aGain = readlineSync.question('Do you want to play again? (y or n)')

if (aGain == 'n'){
    break
}
}