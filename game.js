class Player {
    constructor(name) {
        this.name = name;
        this.hp = 1000;
        this.power = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        this.armor = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    }
    attack(target) {
        const damage = this.power - target.armor;
        target.hp -= damage;
        console.log(`HIT! You've struck an alien ship! Their current HP is now ${target.hp}`);
    }
}
class AlienShip {
    constructor() {
        this.hp = 100;
        this.power = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
        this.armor = Math.floor(Math.random() * (20 - 0 + 1));
    }
    attack(target) {
        const damage = this.power - target.armor;
        target.hp -= damage;
        console.log(`The alien ship attacks! Your current HP is now ${target.hp}`);
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
const startGame = (playerName, AlienCount = 6) => {
    const player = new Player(playerName);
    const alienShips = [];
    for (let i = 0; i < AlienCount; i++) {
        alienShips.push(new AlienShip());
    }
    let playersTurn = true;

    console.log(`You are atttacked by ${AlienCount} Alien ships!`)

    while (player.hp > 0 && alienShips.length > 0) {
        const currentTarget = alienShips[0];
        
        if (playersTurn) {
            player.attack(currentTarget);
        } else {
            alienShips.forEach(alienShip => {
                alienShip.attack(player);
            });
        }

        if (currentTarget.hp <= 0) {
            alienShips.shift();
            console.log(`Aliem ship destroyed, ${alienShips.length} alien ships left!`)
        }

        playersTurn = !playersTurn;
    }

    if (alienShips.length === 0) {
        console.log(`Congratulations ${playerName}! You defeated all ${AlienCount} alien ships.`);
    } else {
        console.log(`Game over! ${playerName}, your spaceship has been destroyed.${alienShips.length} Alien Ships remain!`);
    }
}

startGame('Callister',7)
