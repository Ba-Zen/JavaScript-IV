/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


  class GameObject{
      constructor(options){
        this.createdAt = options.createdAt;
        this.dimensions = options.dimensions;
        this.name = options.name;
      }
      destroy() {
        return `${this.name} was removed from the game.`;
      };
  }
  


  class CharacterStats extends GameObject{
      constructor(characterStatsOptions){
        super(characterStatsOptions);
        this.healthPoints = characterStatsOptions.healthPoints;
      }
      takeDamage() {
        return `${this.name} took damage.`;
      };
  }

  

  class Humanoid extends CharacterStats{
      constructor(humanoidOptions){
        super(humanoidOptions);
        this.team = humanoidOptions.team;
        this.weapons = humanoidOptions.weapons;
        this.language = humanoidOptions.language;
      }
      greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
      };
  }
  
