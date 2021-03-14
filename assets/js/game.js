
  // function to set name
  var getPlayerName=function() {
    var name = "";

  while (name=== "" || name ===null){
    name=prompt("What is your robot's name?");
  }
    console.log("Your robot's name is" + name);
    return name;
    };

  var playerInfo= {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money:10,
  reset: function()
  {
    this.health=100;
    this.money=10;
    this.attack=10;
  },
  refillHealth: function() {
if(this.money >=7) {
  window.alert("Refilling player's health by 20 for 7 dollars.");
  this.health+=20;
  this.money-=7;
}
else {
  window.alert("You don't have enough money!");
}
  },
  upgradeAttack: function() {
if (this.money >=7){
  window.alert("Upgrading player's attack by 6 for 7 dollars.");
  this.attack += 6;
  this.money-=7;
}
else {
  window.alert("You don't have enough money!");
}
  }
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value=Math.floor(Math.random()*(min-max+1)+min);
  return value;
};

var enemyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
{
  name:"Robo Trumble",
  attack: randomNumber(10,14)
}
];


// function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj= enemyInfo[i];

      // reset enemyInfo.health before starting new fight
      pickedEnemyObj.health = randomNumber(40,60);

      // pass the pickedEnemyObj variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);
    }
    // if player is not alive, break out of the loop and let endGame function run
    else {
      break;
    }
  }

  // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + '.');
  } else {
    window.alert("You've lost your robot in battle!");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Battlebots! Come back soon!');
  }
};

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  var isPlayerTurn=true;
  if (Math.random() > 0.5) {
    isPlayerTurn=false;
  }

  // if it's the player-robot's turn

  //if it's not the player-robot's turn

  //after the turn is done switch turns for the enxt bout of fight
  
     // ask player if they'd like to fight or run
     var fightOrSkip = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');


         // Conditional Recursive Function Call
         if (fightOrSkip === "" || fightOrSkip === null) {
          window.alert("You need to provide a valid answer! Please try again.");
          return fightOrSkip()
        }
  
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }
    }
 

    // if player picks "skip" confirm and then stop the loop
    if (fightOrSkip.toLowerCase === 'skip') {
      // confirm player wants to skip
      if (fightOrSkip()) {
        //if true, leave fight by breaking loop
        break;
      }

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        
        return true;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    //generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
    enemy.health=randomNumber(40,60);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
       playerMoney = playerMoney + 20;

      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    // generate random damage value based on enemy's attack power
    var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);

    playerInfo.health = Math.max(0,playerInfo.health-damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
    //switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
};

// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );

  // use switch case to carry out action
  shopOptionPrompt = parseInt(shopOptionPrompt);
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
      
    case 2:
      playerInfo.upgradeAttack();
      break;
      
    case 3:
      window.alert("Leaving the store.");
      // do nothing, so function end
      break;

    default:
      window.alert('You did not pick a valid option. Try again.');
      shop();
      break;
  }
};

//start the game when the page loads
startGame();