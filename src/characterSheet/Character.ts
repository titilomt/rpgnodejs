export default class Character {
  constructor({
    playerName, 
    name, 
    level, 
    $class,
    race, 
    alignment, 
    deity, 
    size, 
    age, 
    gender
  }){
    
  }

  public toString(){
    return `Character Name: ${this.name}\n
      Player Name: ${this.playerName}\n
      Class: ${this.$class}\n
      Level: ${this.level}\n
      Race: ${this.race}\n
      Alignment: ${this.alignment}\n
      Deity: ${this.deity}\n
      Size: ${this.size}\n
      Age: ${this.age}\n
      Gender: ${this.gender}\n
      Height: ${this.height}\n
      Weight: ${this.weight}\n
      Eyes: ${this.eyes}\n
      Hair: ${this.hair}\n
      Skin: ${this.skin}\n
      Lore: ${this.lore}
    `;
  }
}