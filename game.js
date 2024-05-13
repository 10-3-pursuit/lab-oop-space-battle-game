function MaxMinRandomizer(max, min){
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum;
};

class Player {
    constructor(name){
        this.name = name;
        this.hp = 1000;
        this.power = MaxMinRandomizer(100,50);
        this.armor = MaxMinRandomizer(40,20);
    };
    attack(target){
        const attackDmg = this.power - target.armor;
        const remainingHP = target.hp - attackDmg;
        target.hp = remainingHP;
        console.log(`HIT! You've struck an alien ship! Their current HP is now ${remainingHP}`);
    };
};

class AlienShip {
    constructor(){
        this.hp = 100;
        this.power = MaxMinRandomizer(60,30);
        this.armor = MaxMinRandomizer(20,0);
    }
    attack(target){
        const attackDmg = this.power - target.armor;
        const remainingHP = target.hp - attackDmg;
        target.hp = remainingHP;
        console.log(`HIT! You've been struck by an alien ship! Your current HP is now ${remainingHP}`);
    };
};

// Testing purposes -- not part of the game!
// const player1 = new Player("Callister")
// const alien = new AlienShip()

// console.log(player1)
// console.log(alien)

// console.log('--------------')
// player1.attack(alien)
// alien.attack(player1)
// console.log('alien stats after attack')
// console.log(alien)
// console.log(player1)

// Game Loop so player/enemy can take a turn attacking each other
const startGame = (playerName) => {
    const alienShips = [];
    const player = new Player(playerName);
    let playersTurn = true;
    
    for(let i = 0; i < 6; i++) {
        const newShip = new AlienShip();
        alienShips.push(newShip);
    }
    
    while(player.hp > 0 && alienShips.length > 0){
        let currentTarget = alienShips[0];

        if(playersTurn){
            player.attack(currentTarget);
            if(currentTarget.hp <= 0){
                alienShips.shift();
                if(alienShips.length === 0){
                    break;
                }
                currentTarget = alienShips[0];
                console.log(`A New ship approaches. Ship stats: hp:${currentTarget.hp}, armor:${currentTarget.armor} power:${currentTarget.power}`);
            }
            playersTurn = false;
        }else{
            currentTarget.attack(player);
            if(player.hp <= 0){
                break;
            };
            playersTurn = true;
        };
    };

    if(alienShips.length === 0) {
        console.log(`Congratulations ${playerName}, you won with ${player.hp} health remaining.`);
    }else if(player.hp <= 0){
        console.log(`Sorry, ${playerName}, there were still ${alienShips.length} ships remaining!`);
    };
};

startGame('Callister');
