const heroes = require('./heroes.json');

class Player {
    constructor(name){
      let factions = ['haven', 'academy']//,'necropolis','stronghold','sylvan','dungeon','fortress'];
      let faction = factions[Math.floor(Math.random() * factions.length)];
      console.log(faction);
      let hero = heroes[faction][Math.floor(Math.random() * heroes[faction].length)];
      this.index = 99;
      this.name = name;
      this.faction = faction;
      this.class = hero.classe;
      this.hero = hero.hero;
      this.profile = 'https://hommb.herokuapp.com/hero/'+hero.faction+'/'+hero.speciality;
      this.thumbnail = 'https://hommb.herokuapp.com/assets/heroes/'+hero.faction+'-'+hero.speciality+'-'+hero.hero+'.png';
      this.health = 150;
      this.mana = 10;
      this.inBattle = false;
    };
}
module.exports = Player;
