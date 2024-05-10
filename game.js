class Player {
  constructor(name) {
    this.name = name;
    this.hp = 1000;
    this.power = Math.floor(Math.random() * 51) + 50;
    this.armor = Math.floor(Math.random() * 21) + 20;
  }
  attack(target) {
    target.hp -= this.power - target.armor;
    console.log(
      `HIT! You've struck an alien ship! Their current HP is now ${target.hp}.`
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
    target.hp -= this.power - target.armor;
    console.log(
      `HIT! You've been struck by an alien ship! Your current HP is now ${target.hp}.`
    );
  }
}

const startGame = (playerName) => {
  const alienArray = [
    new AlienShip(),
    new AlienShip(),
    new AlienShip(),
    new AlienShip(),
    new AlienShip(),
    new AlienShip(),
  ];
  const player = new Player(playerName);
  let playersTurn = true;
  while (player.hp > 0 && alienArray.length > 0) {
    let currentTarget = alienArray[0];
    if (playersTurn) {
      player.attack(currentTarget);
      if (currentTarget.hp <= 0) {
        alienArray.shift();
      }
      playersTurn = !playersTurn;
    } else {
      for (let alien of alienArray) {
        alien.attack(player);
      }
      playersTurn = !playersTurn;
    }
  }
  if (alienArray.length === 0) {
    console.log(`${player.name} won! We're saved!`);
  } else {
    console.log(
      `${player.name} has lost! All is lost! We're all going to die!`
    );
  }
};

startGame("Callister");
