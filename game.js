class Player {
    constructor(name) {
        this.name = name;
        this.hp = hp;
        this.power;
        this.damage;
        this.armor;
    }
    attack() {
        console.log("You were attacked")
    }
}

class AlienShip {
    constructor() {
        this.hp = hp;
        this.power;
        this.damage;
        this.armor;
    }
    attack() {
        console.log("You were attacked")
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
const startGame = () => {}

startGame('Callister')
