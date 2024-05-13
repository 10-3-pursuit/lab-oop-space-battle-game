class Player {
    constructor(name) {
        this.name = name;
        this.hp = 1000;
        this.power = Math.floor(Math.random() * 100) + 50; // can inflict this range of damage onto other object
        this.armor = Math.floor(Math.random() * 21) + 20; // range is 21 numbers (which is 0-20 and adding 20 shifts it to 20-40)
    }
    attack(alienShip) {
        const damage = this.power;
        const remainingArmor = alienShip.armor - damage;
        const totalDamage = damage - alienShip.armor;
        const remainingHp = alienShip.hp - totalDamage;
        
        alienShip.hp = remainingHp;
        alienShip.armor = remainingArmor;

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
        const damage = this.power;
        const totalDamage = damage - player.armor;
        const remainingArmor = player.armor - damage;
        const remainingHp = player.hp - totalDamage;
        
        player.hp = remainingHp;
        player.armor = remainingArmor;

        console.log(`An alien ship attacked you. You now have ${remainingHp}hp and ${remainingArmor}armor.`)
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


    let playerTurn = true; // to toggle btween turns since player always goes twice otherwise
    // player's turn
    while (player1.hp > 0 && alienShips.some(alienShip => alienShip.hp > 0)) {
        if (playerTurn) {
            player1.attack(alienShips[0]);
            if (alienShips[0].hp <= 0) {
                console.log("An alien ship has been destroyed!");
                alienShips.shift();
            }
            if (player1.hp <= 0) {
                console.log(`Game over! ${player1.name} spaceship has been destroyed!`);
                break; // so game ends
            }
        } else { // alien ship's turn
            for (let i=0; i < alienShips.length; i++) {
                if (alienShips[i].hp > 0) {
                    alienShips[i].attack(player1); // each ship still in array attacks player1
                }
                if (player1.hp <=0) {
                    console.log(`Game over! ${player1.name} spaceship has been destroyed!`);
                    break; // so game ends
                }
            }
        }
        playerTurn = !playerTurn // switches the turn
    }
};

startGame('Callister');