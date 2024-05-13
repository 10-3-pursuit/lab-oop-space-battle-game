class Player {
    constructor(playaMarl) {
        this.name = playaMarl;
        this.hp = 1000; // hit points as stated in instructions
        this.power = this.getRandomNumber(50, 100); // doing damage/we got the power!
        this.armor = this.getRandomNumber(20, 40); // armor strength
}
getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

attack(target) {
    const damage = this.power - target.armor;
    target.hp -= damage;
    console.log(`${this.name} attacks ${target.constructor.name} for ${damage} damage.`);
}
}

class AlienShip {
    constructor() {
        this.hp = 100; // hit points as stated
        this.power = this.getRandomNumber(30, 60); // less damage/weaker power
        this.armor = this.getRandomNumber(0, 20); // way less armor
    }
    
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    attack(target) {
        const damage = this.power - target.armor;
        target.hp -= damage;
        console.log(`AlienShip attacks ${target.constructor.name} for ${damage} damage.`);
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
const startGame = (playaMarl) => {
    const player = new Player(playaMarl);
    const alienShips = [];
    for (let i = 0; i < 6; i++) {
        alienShips.push(new AlienShip());
    }
    
    let playersTurn = true;
    
    while (player.hp > 0 && alienShips.length > 0) {
        const currentTarget = alienShips[0];
        if (playersTurn) {
            player.attack(currentTarget);
        } else {
            for (const alienShip of alienShips) {
                alienShip.attack(player);
            }
        }
        playersTurn = !playersTurn;
        if (currentTarget.hp <= 0) {
            alienShips.shift();
        }
    }
    
    if (alienShips.length === 0) {
        console.log("Congratulations! You defeated all the alien ships and saved Earth!");
    } else {
        console.log("Game over! Earth has been destroyed by the alien invasion.");
    }
}


startGame("playMarl");
