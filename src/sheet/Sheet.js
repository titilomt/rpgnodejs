class Sheet {
  constructor(
    character, 
    abilityPoints, 
    skillPoints, 
    battlePoints, 
    talents, 
    armor,
    weapons,
    equip,
    spells
  ) {
    this._character = character;
    this._abilityPoints = abilityPoints;
    this._skillPoints = skillPoints;
    this._battlePoints = battlePoints;
    this._talents = talents;
    this._armor = armor;
    this._weapons = weapons;
    this._equip = equip;
    this._spells = spells;
  }

  toString() {
    return `Character Name: ${this._character.name}\n
      Player Name: ${this._character.playerName}\n
      Class: ${this._character.class}\n
      Level: ${this._character.class}\n
      Race: ${this._character.race}\n
      Alignment: ${this._character.alignment}\n
      Deity: ${this._character.deity}\n
      Size: ${this._character.size}\n
      Age: ${this._character.age}\n
      Gender: ${this._character.gender}\n
      Height: ${this._character.height}\n
      Weight: ${this._character.weight}\n
      Eyes: ${this._character.eyes}\n
      Hair: ${this._character.hair}\n
      Skin: ${this._character.skin}\n
      Lore: ${this._character.lore}
    `;
  }

  get character(){
    return this._character;
  }

  set character(character) {
    this._character = character;
  }

  get abilityPoints(){
    return this._abilityPoints;
  }

  set abilityPoints(abilityPoints) {
    this._abilityPoints = abilityPoints;
  }

  get skillPoints(){
    return this._skillPoints;
  }

  set skillPoints(skillPoints) {
    this._skillPoints = skillPoints;
  }

  get battlePoints(){
    return this._battlePoints;
  }

  set battlePoints(battlePoints) {
    this._battlePoints = battlePoints;
  }

  get talents(){
    return this._talents;
  }

  set talents(talents) {
    this._talents = talents;
  }

  get armor(){
    return this._armor;
  }

  set armor(armor) {
    this._armor = armor;
  }

  get weapons(){
    return this._weapons;
  }

  set weapons(weapons) {
    this._weapons = weapons;
  }

  get equip(){
    return this._equip;
  }

  set equip(equip) {
    this._equip = equip;
  }

  get spells(){
    return this._spells;
  }

  set spells(spells) {
    this._spells = spells;
  }
}