"use strict"
// returns a random integer from 1 to 10 
//function randomDamage(){randomDamage=Math.floor(Math.random() 10) + 1;}
const randomDamage = () => {
    return (Math.floor(Math.random() * 10 + 1));
}

//function chooseOption(opt1, opt2){
const chooseOption = (opt1, opt2) => {
    const randomNum = (Math.floor(Math.random()));
    return((randomNum === 0) ? opt1 : opt2);
}


function attackPlayer(health) {
    return health -= randomDamage();
}


/**function isDead  (health){
   if(health <= 0){
       return false
   }else{
       return true
}} */
let isDead = (health) => {
    return((health <= 0) ? true : false)
}

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
       let attacker = chooseOption(player1, player2);

        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
                if (isDead(player2Health)) {
                    logDeath(player1, player2);
                break;
        }
        else{
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
                if (isDead(player1Health)){
                    logDeath(player2, player1);
                    break;
                }
        }
    }}
}
const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
    }
    
    /**function logDeath(winner, loser) {console.log(`${winner}
    defeated ${loser}`)} */
    
const logDeath = (winner, loser) => {
         console.log(`${winner} defeated ${loser}`);
    }
    