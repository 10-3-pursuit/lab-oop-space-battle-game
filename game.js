class Player {
    constructor(name) {
        this.name = name;
        this.hp = 1000;
        this.power = Math.floor(Math.random() * 100) + 50; // can inflict this range of damage onto other object
        this.armor = Math.floor(Math.random() * 21) + 20; // range is 21 numbers (which is 0-20 and adding 20 shifts it to 20-40)
    }
    attack(alienShip) {
        (alienShip.armor + alienShip.hp) - this.power;
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
        (player.armor + player.hp) - this.power;
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
    // game continues until player1's hp is 0 or less or until all alien ships hp is 0 or less. Inside the loop check if the player.hp > 0 or if there are still alien ships with hp greater than 0 - do while loop
    // The some() method returns true (and stops) if the function returns true for one of the array elements.
    // The some() method returns false if the function returns false for all of the array elements.
    // remove first element of alienships array once hp = 0 or less - The shift() method removes the first item of an array. So only have to care about alienShips[0]
    // The shift() method changes the original array.
    // The shift() method returns the shifted element.

    let lastAttacker = player1;
    // player's turn
    while (player1.hp > 0 && alienShips.some(alienShip => alienShip.hp > 0)) {
        player1.attack(alienShips[0]);
        lastAttacker = player1;
        if (alienShips[0].hp <= 0) {
            console.log("An alien ship has been destroyed!");
            alienShips.shift();
        }
        if (player1.hp <= 0) {
            console.log(`Game over! ${player1.name} spaceship has been destroyed!`);
            break; // so game ends
        }
    }
    // Alien turn
    for (let i=0; i < alienShips.length; i++) {
        if (alienShips[i].hp > 0) {
            alienShips[i].attack(player1); // each ship still in array attacks player1
            lastAttacker = alienShips[i];
        }
        if (player1.hp <=0) {
            console.log(`Game over! ${player1.name} spaceship has been destroyed!`);
            break; // so game ends
        }
    }
};

startGame('Callister');
