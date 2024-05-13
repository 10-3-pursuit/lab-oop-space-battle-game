class Player {
    constructor(name) {
        this.name = name;
        this.hp = 1000;
        this.power = Math.floor(Math.random() * 100) + 50; // can inflict this range of damage onto other object
        this.armor = Math.floor(Math.random() * 21) + 20; // range is 21 numbers (which is 0-20 and adding 20 shifts it to 20-40)
    }
    attack(alienShip) {
        console.log(`HIT! You've struck an alien ship! Their HP was ${alienShip.hp}, but after you attacked with power ${this.power} damage it diminished their ${alienShip.armor} armor and HP. Their HP and armor is now a total of ${(alienShip.armor + alienShip.hp) - this.power} hp`)
    }
}

class AlienShip {
    constructor() {
        this.hp = 100;
        this.power = Math.floor(Math.random() * 31) + 30; // can inflict this range of damage onto other object
        this.armor = Math.floor(Math.random() * 21);
    }
    attack(player) {
        console.log(`An alien ship attacked ${player.name}`)
    }
}

//const alienShip = new AlienShip();

//const player1 = new Player("player1")

//alienShip.attack(player1);
//player1.attack(alienShip);

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
const startGame = (player) => {
    const player1 = new Player(player);
    const alienShips = [
        new AlienShip(), 
        new AlienShip(), 
        new AlienShip(), 
        new AlienShip(), 
        new AlienShip(), 
        new AlienShip()
    ];
    console.log(`${player1.name}, welcome to the game!`);
    // make 6 alienships (an array of Alien ships)
    // player1 goes first
    // keep track who's turn it is using last attacker - basically if player1 just went it is the alien ships turn
    // game continues as until player1's hp is 0 or all alien ships hp is 0. Inside the loop check if the player.hp > 0 and if there are still alien ships (alienShips.length > 0) - do while loop
    let lastAttacker = player1;
    // player's turn
    while (player1.hp > 0 && alienShips[i].hp > 0) {

    }
};

startGame('Callister');
