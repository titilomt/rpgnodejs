Character = require('./Character');

class AbilityPoints extends Character {
  constructor(
    strength, 
    dexterity, 
    constitution, 
    inteligence, 
    wisdom, 
    charism
  ) {
    this._strength = strength;
    this._dexterity = dexterity;
    this._constitution = constitution;
    this._inteligence = inteligence;
    this._wisdom = wisdom;
    this._charism = charism;
  }
  
  strModifier() {
    let strRaceMod = super.getRaceStrMod();
    return (Math.floor(this._strength / 2) + strRaceMod);
  }

  dexModifier() {
    let dexRaceMod = super.getRaceDexMod();
    return (Math.floor(this._dexterity / 2) + dexRaceMod);
  }

  conModifier() {
    let conRaceMod = super.getRaceConMod();
    return (Math.floor(this._constitution / 2) + conRaceMod);
  }

  intModifier() {
    let intRaceMod = super.getRaceIntMod();
    return (Math.floor(this._inteligence / 2) + intRaceMod);
  }

  wisModifier() {
    let wisRaceMod = super.getRaceWisMod();
    return (Math.floor(this._wisdom / 2) + wisRaceMod);
  }

  chaModifier() {
    let chaRaceMod = super.getRaceChaMod();
    return (Math.floor(this._charism / 2) + chaRaceMod);
  }

  get strength() {
    return this._strength;
  }

  set strength(strength) {
    this._strength = strength;
  }
  
  get inteligence(){
    return this._inteligence;
  }

  set inteligence(inteligence) {
    this._inteligence = inteligence;
  }

  get dexterity() {
    return this._dexterity;
  }

  set dexterity(dexterity) {
    this._dexterity = dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  set constitution(constitution) {
    this._constitution = constitution;
  }

  get wisdom() {
    return this._wisdom;
  }

  set wisdom(wisdom) {
    this._wisdom = wisdom;
  }

  get charism() {
    return this._charism;
  }

  set charism(charism) {
    this._charism = charism;
  }
}
