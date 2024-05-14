class Player {
    constructor(name) {
        this.name = name;
        this.hp = 1000;
        this.power = Math.floor(Math.random() * (100 - 50 + 1) + 50);
        this.armor = Math.floor(Math.random() * (40 - 20 + 1) + 20);
    }

}

class AlienShip { }

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
