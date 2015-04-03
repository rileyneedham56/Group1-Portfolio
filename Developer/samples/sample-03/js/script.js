var chooseGame = function() {
    
    var typeGame = prompt("Which of Riley's games would you like to play? Type EIGHTBALL, DOOR, or BEAR.") .toUpperCase();
    
    if (typeGame === "EIGHTBALL") {
        askAgain();
    }
    else if (typeGame === "DOOR") {
        enterDoor();
    }
    else if (typeGame === "BEAR") {
        fightBear();
    }
    else {
        alert("Invalid option, please try again.");
    }
    
}



var askAgain = function() {

    var question = prompt("Ask the Magic Eight Ball a question.");

    var eightBall = Math.random();

    if (eightBall < .06) {
        confirm("It is certain.");
    }
    else if (eightBall < .11) {
        confirm("It is decidedly so.");
    }
    else if (eightBall < .16) {
        confirm("Without a doubt.");
    }
    else if (eightBall < .21) {
        confirm("Yes definitely.");
    }
    else if (eightBall < .26) {
        confirm("You may rely on it.");
    }
    else if (eightBall < .31) {
        confirm("As I see it, yes.");
    }
    else if (eightBall < .36) {
        confirm("Most likely.");
    }
    else if (eightBall < .41) {
        confirm("Outlook good.");
    }
    else if (eightBall < .46) {
        confirm("Yes.");
    }
    else if (eightBall < .51) {
        confirm("Signs point to yes.");
    }
    else if (eightBall < .56) {
        confirm("Reply hazy try again.");
    }
    else if (eightBall < .61) {
        confirm("Ask again later.");
    }
    else if (eightBall < .66) {
        confirm("Better not tell you now.");
    }
    else if (eightBall < .71) {
        confirm("Cannot predict now.");
    }
    else if (eightBall < .76) {
        confirm("Concentrate and ask again.");
    }
    else if (eightBall < .81) {
        confirm("Don't count on it.");
    }
    else if (eightBall < .86) {
        confirm("My reply is no.");
    }
    else if (eightBall < .91) {
        confirm("My sources say no.");
    }
    else if (eightBall < .96) {
        confirm("Outlook not so good.");
    }
    else {
        confirm("Very doubtful.");
    }
}



var enterDoor = function() {
    
    var nameStart = prompt("Enter your name to begin.");
    
    confirm(nameStart + " has entered the door.");
    
    var hallways = prompt(nameStart + " walks up to two long hallways. Do they choose the RIGHT or LEFT one?") .toUpperCase();
        
        if(hallways === "RIGHT") {
            confirm(nameStart = " begins down the rigth path. They stumble upon an animal that they cannot recognize. It jumps on them and begins attacking.");
            
            alert("GAME OVER");
            
        }
    
        else if(hallways === "LEFT") {
            confirm(nameStart + " goes down the left hallway. While walking through, they cut their leg on a piece of glass sticking out of the wall.");
            
            var stayOrLeave = prompt("Does " + nameStart + " STAY and continue on or LEAVE to go back and get help.") .toUpperCase(); 
            
            if(stayOrLeave === "STAY") {
            
            confirm(nameStart + " decides to stay and explore this old place. " + nameStart + " eventually comes across a humanoid looking organism. It looks like a young boy but they cannot tell.");
                
            var talkOrKill = prompt("Does " + nameStart + " try to TALK to the humanoid or do they try to KILL it while it's back is turned") .toUpperCase();
                
                if(talkOrKill === "TALK") {
                    confirm(nameStart + " approaches the humanoid and it turns out to be a lost little boy. The boy asks for " + nameStart + "'s help and they lead him back to th enetrance. He opens the door and they both are free.");
                    
                    alert("YOU WIN!");
            }
                else if(talkOrKill === "KILL") {
                    
                    confirm(nameStart + " finds a knife on the ground. They decide to sneakily walk up behind the humanoid creature and attack it.  Once " + nameStart + " sees that it is dead they examine it and they see that it was a little boy. " + nameStart + " becomes guilty and commits suicide out of greif.");
                            
                    alert("GAME OVER");
                    
                }
                
            }
            
            else if(stayOrLeave === "LEAVE") {
            
                confirm(nameStart + " heads back towards the entrance. They find that the door is locked. All of the lights go out.");
                
                alert("GAME OVER");
            
            }
            
            else {
                confirm(nameStart + " decides to not do anything and bleeds to death from the cut.");
                alert("GAME OVER");
            }
            
        }
            
        else {
            confirm(nameStart + " decides to sit down and wait for help. They die.");
            alert("GAME OVER");
        }
    
}



var fightBear = function() {

    alert("'QUICKLY, THERE IS A BEAR BEHIND YOU!'");
    
    var rightOrLeft = prompt("The bear jumps at you from behind. Type RIGHT to dodge towards your right or type LEFT to dodge towards your left. You need to dodge the bear five time to win") .toUpperCase();
    
    var chanceToLive = Math.random();
    
    if(chanceToLive < .5) {
        
        alert("'NO, NOT THAT WAY!'");
        
        confirm("You turn " + rightOrLeft + " and try to dodge, but he strikes you down and eats you.");
        
        alert("GAME OVER");
        
    }
    
    else {
    
        alert("'YES, KEEP GOING!'");
        
        var rightOrleft2 = prompt("Which way do you dodge next?");
        
        var chanceToLive2 = Math.random();
    
        if(chanceToLive2 < .5) {
        
            alert("'NO, NOT THAT WAY!'");
        
            confirm("You turn " + rightOrleft2 + " aand try to dodge, but he strikes you down and eats you.");
        
            alert("GAME OVER");
        
        }
    
        else {
    
            alert("'YES, KEEP GOING!'");
        
            var rightOrleft3 = prompt("Which way do you dodge next?");
        
            var chanceToLive3 = Math.random();
    
            if(chanceToLive3 < .5) {
        
                    alert("'NO, NOT THAT WAY!'");
        
                    confirm("You turn " + rightOrleft3 + " and try to dodge, but he strikes you down and eats you.");
        
                    alert("GAME OVER");
        
                }
    
            else {
    
                alert("'YES, KEEP GOING!'");
        
                var rightOrleft4 = prompt("Which way do you dodge next?");
        
                var chanceToLive4 = Math.random();
    
                if(chanceToLive4 < .5) {
        
                    alert("'NO, NOT THAT WAY!'");
        
                    confirm("You turn " + rightOrleft4 + " and try to dodge, but he strikes you down and eats you.");
        
                    alert("GAME OVER");
        
                }
                
                else {
    
                    alert("'YES, ONE MORE TO WIN!'");
                    
                    var rightOrleft5 = prompt("Which way do you dodge next?");
        
                    var chanceToLive5 = Math.random();
    
                    if(chanceToLive5 < .5) {
        
                        alert("'NO, NOT THAT WAY!'");
        
                        confirm("You turn " + rightOrleft5 + " and try to dodge, but he strikes you down and eats you.");
        
                        alert("GAME OVER");
        
                    }
                
                    else {
    
                        alert("'YES, YOU HAVE DODGED ALL OF HIS ATTACKS!'");
                    
                        alert("YOU WIN!")
                
                    }
                
                }
                
            }
                
        }
        
    }
    
}