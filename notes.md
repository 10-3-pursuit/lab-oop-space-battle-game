# Pseudocode:
1. make 6 alienships (an array of Alien ships)
2. player1 goes first
3. keep track who's turn it is using last attacker - basically if player1 just went it is the alien ships turn
4. game continues until player1's hp is 0 or less or until all alien ships hp is 0 or less. Inside the loop check if the player.hp > 0 or if there are still alien ships with hp greater than 0 - do while loop
5. The some() method returns true (and stops) if the function returns true for one of the array elements.
6. The some() method returns false if the function returns false for all of the array elements.
7. remove first element of alienships array once hp = 0 or less - The shift() method removes the first item of an array. So only have to care about alienShips[0]
8. The shift() method changes the original array.
9. The shift() method returns the shifted element.

```js
    const damage = this.power;
    const remainingArmor = alienShip.armor - damage;
    const totalDamage = damage - alienShip.armor;
    const remainingHp = alienShip.hp - totalDamage;
        
    alienShip.hp = remainingHp; // this sets it to the new calculated value based on damage instead of updating it to current value remainingHp = alienShip.hp, which means that remainingHp will hold the same value as alienShip.hp, but it won't update the hp property of the alienShip object itself
    alienShip.armor = remainingArmor;
```

## Useful Sites:
JavaScript Array some(): https://www.w3schools.com/jsref/jsref_some.asp

JavaScript Array shift(): https://www.w3schools.com/jsref/jsref_shift.asp