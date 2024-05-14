class Player {
  constructor(name) {
    this.name = name;
    this.hp = 1000;
    this.power = Math.floor(Math.random() * 51) + 50;
    this.armor = Math.floor(Math.random() * 21) + 20;
  }
  attack(target) {
    const damage = this.power - target.armor;
    target.hp -= damage;
    console.log(
      `HIT! You've struck an alien ship! Their current HP is now ${target.hp}`
    );
  }
}

class AlienShip {
  constructor() {
    this.hp = 100;
    this.power = Math.floor(Math.random() * 31) + 30;
    this.armor = Math.floor(Math.random() * 21);
  }

  attack(target) {
    const damage = this.power - target.armor;
    target.hp -= damage;
    console.log(
      `HIT! You've struck ${target.name}! Their current HP is now ${target.hp}`
    );
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
  const player = new Player(playerName);
  const alienShips = [];

  for (let i = 0; i < 6; i++) {
    alienShips.push(new AlienShip());
  }

  let playersTurn = true;

  while (player.hp > 0 && alienShips.length !== 0) {
    const currentTarget = alienShips[0];
    if (playersTurn) {
      player.attack(currentTarget);
      if (currentTarget.hp <= 0) {
        alienShips.shift();
        // alienShips = alienShips.filter(
        //   (alienShip) => alienShip !== currentTarget
        // );
      }
      playersTurn = !playersTurn;
    } else {
      alienShips.forEach((alienShip) => alienShip.attack(player));
      playersTurn = !playersTurn;
    }
  }

  if (player.hp <= 0) {
    console.log(`Damn, try again next time Commander ${player.name}`);
  } else {
    console.log(`Winner winner chicken dinner ${player.name}!`);
  }
};

startGame("Callister");
