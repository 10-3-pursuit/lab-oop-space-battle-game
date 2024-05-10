class Player {
    constructor(name){
        this.name = name;
        this.hp = 1000;
        this.power = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        this.armor = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    }
    attack(target){
        target.hp -= (this.power - target.armor) 
        console.log(`HIT! You've struck an alien ship! Their current HP is now ${target.hp}`)
    }
}

class AlienShip {
    constructor(){
        this.hp = 100;
        this.power = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
        this.armor = Math.floor(Math.random() * 20) + 1;
    }
    attack(target){
        target.hp -= (this.power - target.armor) 
        console.log(`Alien ship has struck ${target.name}! Your current HP is now ${target.hp}`)
    }
}

// Game Loop so player/enemy can take a turn attacking each other
const startGame = (name) => {

    const player = new Player(name)
    let playersTurn = true

    // generates a random integer between 6 and 10
    const numberOfShips = Math.floor(Math.random() * 5) + 6
    const alienShips = []
    for(let i = 0; i < numberOfShips; i++){
        alienShips.push(new AlienShip())
    }

    while(player.hp > 0 && alienShips.length !== 0){
        const currentTarget = alienShips[0]
        if(playersTurn){
            playersTurn = !playersTurn
            player.attack(currentTarget)
            if(currentTarget.hp <= 0){
                alienShips.shift()
            }
        } else {
            playersTurn = !playersTurn
            for(let alien of alienShips){
                alien.attack(player)
                if(player.hp <= 0){
                    break
                }
            }
        }
    }

    if(alienShips.length === 0){
        console.log(`YOU WIN! ${player.name} defeated all alien ships!`)
    } else {
        console.log(`YOU LOST! Alien ships have defeated ${player.name}`)
    }
}

startGame('Callister')
