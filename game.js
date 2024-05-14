class Player {
    constructor(name) {
        this.name = name;
        this.hp = 1000;
        this.power = Math.floor(Math.random() * (100 - 50 + 1) + 50);
        this.armor = Math.floor(Math.random() * (40 - 20 + 1) + 20);
    }
    attack(target) {
        const attackPoints = this.power - target.armor;
        target.hp -= attackPoints;
        console.log(`HIT! You've struck an alien ship! Their current HP is now ${target.hp}`)
    }
}

class AlienShip {
    constructor() {
        this.hp = 100;
        this.power = Math.floor(Math.random() * (60 - 30 + 1) + 30)
        this.armor = Math.floor(Math.random() * (20 + 1))
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
const startGame = () => { }

startGame('Callister')
