const powerGenerator = () => {
    return Math.floor(50 + Math.random() * (100 - 50 + 1))
}

const armorGenerator = () => {
    return Math.floor(20 + Math.random() * (40 - 20 + 1))
}

const damageGenerator = () => {
    return Math.floor(30 + Math.random() * (60 - 30 + 1))
}

const alienArmorGenerator = () => {
    return Math.floor(0 + Math.random() * (20 - 0 + 1))
}

class Player {
    constructor (name) {
        this.hp = 1000;
        this.power = powerGenerator();
        this.armor = armorGenerator();
    }
    attack (target) {
        let damage = Math.max(0, this.power - target.armor);
        target.hp -= damage;
        console.log(`HIT! You've struck an alien ship! Their current HP is now ${target.hp}`)
    }
}

class AlienShip {
    constructor () {
        this.hp = 100;
        this.power = damageGenerator();
        this.armor = alienArmorGenerator();
    }
    attack (player) {
        let damage = Math.max(0, this.power - player.armor);
        player.hp -= damage;
         console.log(`Crash! An alien ship has attacked! Your hp is now ${player.hp}`)
    }
}


const startGame = (playerName) => {
    console.log(`Game Started, Good Luck ${playerName}`)
  const player = new Player(playerName);
  const alienShips = Array.from({length: 6}, () => new AlienShip);
  let playerTurn = true;

    while (player.hp > 0 && alienShips.length > 0) {
        if (playerTurn) {
            let currentTarget = alienShips[0];
            player.attack(currentTarget);
            if (currentTarget.hp <= 0) {
                console.log("An alien ship has been destroyed")
                alienShips.shift()
            }
        } else {
            for (let alien of alienShips) {
                alien.attack(player);
                if (player.hp <= 0) {
                    console.log("Game Over, Player Defeated")
                    return
                }
            }
        }
        playerTurn = !playerTurn
    }
    if (player.hp > 0 && alienShips.length === 0) {
        console.log("Victory! All alien ships Destroyed.")
    } else {
        console.log("Game Over! Player has been Defeated.")
    }
}

startGame('Callister')
