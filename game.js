class Player {
    constructor(name) {
        this.name = name;
        this.hp = 1000;
        this.power = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        this.armor = Math.floor(Math.random() * (40 - 20 + 1)) + 20; 
    }
    attack(target) {
        const damage = this.power - target.armor
        target.hp -= damage 
        return `HIT! You've struck an alien ship! Their current HP is now ${target.hp}`
    }
}

class AlienShip {
    constructor() {
        this.hp = 100;
        this.power = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
        this.armor = Math.floor(Math.random() * 21);
    }
    attack(target) {
        const damage = this.power - target.armor
        target.hp -= damage 
        return `HIT! You've struck an alien ship! Their current HP is now ${target.hp}`
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
    let alienShips = [];

    for (let i = 0; i < 6; i++) {
        alienShips.push(new AlienShip());
    }

    const player = new Player(playerName)
    let playersTurn = true;

    while(player.hp > 0 && alienShips.length > 0) {
        const currentTarget = alienShips[0]

        if(playersTurn) {
            console.log(player.attack(currentTarget))
        } else {
            for (let alienShip of alienShips) {
                console.log(alienShip.attack(player))
            }
        }

        playersTurn = !playersTurn

        if(currentTarget.hp <= 0) {
            alienShips.shift()
        }

        if(player.hp <= 0) {
            break;
        }
    }

    if(alienShips.length === 0) {
        console.log(`YOU WON!`)
    }
    if(alienShips.length > 0) {
        if(player.hp <= 0) {
            console.log(`YOU LOST!`)
        }
    }
}

startGame('Kenneth')
