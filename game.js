class Player {
    constructor(name) {
        this.name = 
        this.hp = 1000;
        this.power = powerGenerator();
        this.armor = armorGenerator();
    }
    attack(target){
        target.hp -= this.power - target.armor;
        console.log(`HIT! You've struck an alien ship! Their current HP is now ${target.hp}`);
    }
}


class AlienShip {
    constructor(){
        this.hp = 100;
        this.power = 50;
        this.armor = 10;
    }
    attack(target){
        target.hp -= this.power - target.armor;
        console.log(`HIT! You've struck an Earthling ship! Their current HP is now ${target.hp} `);
    }
}

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
    const alienShips = [
        new AlienShip(),
        new AlienShip(),
        new AlienShip(),
        new AlienShip(),
        new AlienShip(),
        new AlienShip(),
    ];
    const player = new Player(playerName);
    let isPlayerTurn = true; 
    
    while (player.hp > 0 && alienShips.length > 0) {
        if (isPlayerTurn) {
            const currentTarget = alienShips[0];
            player.attack(currentTarget);
            if (currentTarget.hp <= 0) {
                console.log("Target destroyed.");
                alienShips.shift();
            }
        } else {
            for (const alienShip of alienShips) {
                if (player.hp > 0) {
                    alienShip.attack(player);
                }
            }
        }
        isPlayerTurn = !isPlayerTurn; 
    }
    
    if (alienShips.length === 0) {
        console.log(`Well done ${playerName}, you defeated the Aliens`);
    } else if (player.hp <= 0) {
        console.log(`${playerName}, there were still ${alienShips.length} ships remaining!`);
    }
};

startGame('Callister');

