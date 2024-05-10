class Player {
  constructor(name) {
    this.name = name;
    this.hp = 1000;
    this.power = 75;
    this.armor = 25;
  }
  attack(target) {
    target.hp -= this.power - target.armor;
    console.log(
      `You've struck an alien ship! Their current HP is now: ${target.hp}`
    );
  }
}

class AlienShip {
  constructor() {
    this.hp = 100;
    this.power = 50;
    this.armor = 10;
  }
  attack(target) {
    target.hp -= this.power - target.armor;
    console.log(
      `You've struck a human ship! Their current HP is now: ${target.hp}`
    );
  }
}

// Testing purposes -- not part of the game!
// const player1 = new Player("Callister");
// const alien = new AlienShip();

// console.log(player1);
// console.log(alien);

// console.log("--------------");
// player1.attack(alien);
// alien.attack(player1);
// console.log("alien stats after attack");
// console.log(alien);
// console.log(player1);

// Game Loop so player/enemy can take a turn attacking each other
const startGame = (playerName) => {
  const alienShips = [
    new AlienShip(),
    new AlienShip(),
    new AlienShip(),
    new AlienShip(),
    new AlienShip(),
    new AlienShip(),
  ];
  const player1 = new Player("Callister");
  let playersTurn = true;
  console.log(alienShips, player1);

  while (player1.hp > 0 && alienShips.length > 0) {
    let currentTarget = alienShips[0];
    if (playersTurn) {
      player1.attack(currentTarget);
    } else {
      for (let i = 0; i < alienShips.length; i++) {
        alienShips[i].attack(player1);
      }
    }
    playersTurn = !playersTurn;
    if (currentTarget.hp <= 0) {
      alienShips.splice(0, 1);
      console.log(`Alien ship down`);
      if (alienShips.length > 0) {
        currentTarget = alienShips[0];
      }
    }
    if (player1.hp <= 0) {
      console.log("Game Over! Your spaceship was destroyed");
    }
  }
  if (alienShips.length === 0) {
    console.log(
      `Congratulations ${player1.name}! You have destroyed all alien ships.`
    );
  }
};

startGame("Callister");
