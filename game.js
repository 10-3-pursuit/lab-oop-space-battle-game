class Player {
    constructor(name) {
        this.name = name;
        this.hp = 1000;
        this.power = Math.floor(Math.random() * 100) + 50; // can inflict this range of damage onto other object
        this.armor = Math.floor(Math.random() * 21) + 20; // range is 21 numbers (which is 0-20 and adding 20 shifts it to 20-40)
    }
    attack() {
        console.log("You were attacked")
    }
}

class AlienShip {
    constructor() {
        this.hp = 100;
        this.power = Math.floor(Math.random() * 31) + 30; // can inflict this range of damage onto other object
        this.armor = Math.floor(Math.random() * 21);
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
