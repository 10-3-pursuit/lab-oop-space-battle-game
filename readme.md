# Space Battle Game

<img src="./assets/alien-battle.jpg" width="600" height="600">

## Objective:

The objective of this lab is to create a simple space battle game where the player controls a spaceship and battles against alien ships to save Earth.

## Key Concepts:

- Object-Oriented Programming (OOP) principles
- Classes and objects
- Methods and attributes
- Game logic and loops

## INSTRUCTIONS

### Understand the Game Requirements:

- This is a space battle game where you, as the player, control a spaceship and fight against alien ships to save Earth.
- The game involves two classes: `Player` (for the player's spaceship) and `AlienShip` (for the alien spaceships).
- Both classes have attributes such as hit points (HP), damage/power, armor, and a method for attacking.

### Create the Player Class:

1. Start by creating a constructor for the `Player` class that takes a `name` parameter.
2. Inside the constructor, initialize `this.hp` to 1000 (hit points), `this.power` to a random number between 50 and 100 (damage), and `this.armor` to a random number between 20 and 40 (armor).

### Create the AlienShip Class:

1. Next, create a constructor for the `AlienShip` class that initializes `this.hp` to 100 (hit points), `this.power` to a random number between 30 and 60 (damage), and `this.armor` to a random number between 0 and 20 (armor).

### Implement Attack Methods for Both Classes:

- In the `Player` class, define an `attack` method that takes a `target` parameter (this parameter represents an instance of `AlienShip`).
- Inside the `attack` method, subtract the damage (`this.power`) minus the target's armor from the target's HP and log the attack result.
  (e.g. `HIT! You've struck an alien ship! Their current HP is now 25` except the number 25 will be dynamic and not hardcoded)

### Testing (Optional):

- Uncomment the testing code after you've completed both the Player and the Alien class. This is only to test the classes before the statGame function is built. You have the ability to test the `attack` method of both classes. Just run `node game.js` in your terminal.

### Create the Game Loop and Start Game Function:

1. Define a function named `startGame` that takes the player's name as a parameter.
2. Inside `startGame`, create an array `alienShips` to store instances of `AlienShip` (you can start with, say, 6 alien ships).
3. Create an instance of `Player` using the provided name parameter.
4. Initialize a boolean variable `playersTurn` to `true` to track whose turn it is.

### Implement the Game Loop:

- Create a game loop that runs as long as the player's spaceship has HP and there are still alien ships.
  - Inside the loop:
    - Determine the current target (`currentTarget variable`) by accessing the first alien ship in the `alienShips` array.
    - If it's the player's turn:
      - Player attacks the current target (`currentTarget`) using the `attack` method.
    - If it's the alien's turn:
      - Each alien ship attacks the player's spaceship sequentially.
    - Update `playersTurn` after each turn.
    - Check if the current target (`currentTarget`) is defeated (HP <= 0) and remove it from the `alienShips` array.
    - Check if the player's spaceship HP is <= 0 to end the game loop.

### Check for Defeated Alien Ships:

- After each attack, check if the current target's HP is less than or equal to 0. If so, remove it from the `alienShips` array.

### End Game Conditions:

- After the loop ends, check if `alienShips.length === 0` to determine if the player won (all aliens defeated).
- If `alienShips.length > 0`, check if the player's HP is less than or equal to 0 to determine if the player lost.
- Log appropriate messages for winning or losing.

### Run the Game:

- Call the `startGame` function with a player name to start the game. For example, `startGame("YourName")`.
- In your terminal type `node game.js`. You will see the output of your game.

**Credits: Carlos Godoy**
