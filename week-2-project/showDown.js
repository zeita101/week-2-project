function fight() {
  let monster = prompt("What is your monster's name?")
  let  hero = prompt("What is your hero's name?")
  let monsterHealth = 50;
  let heroHealth = 50;

console.log (hero);

//While hero and monster health is over zero run loop until its zero
//

  while (heroHealth > 0 && monsterHealth > 0) {
    let heroDice = Math.round(Math.random() * 20)
    let monsterDice = Math.round(Math.random() * 20)


    if (heroDice === 1 || heroDice === 2) {
      monsterHealth -= 5;
      alert(`Monster loss 5 health. Monster's current health is ${monsterHealth}.`);
    }else if (heroDice === 3 || heroDice === 10){
      monsterHealth -= 0;
      alert(`Monster loss didn't lose health. Monster's current health is ${monsterHealth}.`);
    }else if (heroDice === 11 || 18){
      monsterHealth -= 10; 
      alert(`Monster loss 10 health. Monster's current health is ${monsterHealth}.`);
    }else if (heroDice === 19 || heroDice === 20){
      monsterHealth -= 20; 
    alert(`Monster loss 20 health. Monster's current health is ${monsterHealth}.`);
    }

    if (monsterDice === 1 || monsterDice === 2) {
      heroHealth -= 5;
    }else if (monsterDice === 3 || monsterDice === 10){
      heroHealth -= 0;
    }else if (monsterDice === 11 || 18){
      heroHealth -= 10; 
    }else if (monsterDice === 19 || monsterDice === 20)
      heroHealth -= 10; 

  }
   if (monsterHealth <= 0 && heroHealth <= 0) {
     alert(`Tie`);
   }else if (monsterHealth > heroHealth){
     alert(`${monster} wins`);
   }else if (heroHealth > monsterHealth){
      alert(`${hero} wins`);
   }
   console.log(heroHealth, monsterHealth);
//   let roundTwo = prompt("Would you like to play again?")
// if (roundTwo === "yes"){
//   fight();
// }else if (roundTwo === "no"){
//   alert(`Thanks for playing!`)
// }
}

fight();

let roundTwo = prompt("Would you like to play again?");
while (roundTwo === "yes"){
  fight();
  roundTwo = prompt("Would you like to play again?");
  
}
