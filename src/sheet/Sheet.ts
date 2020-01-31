import Character from '../characterSheet/Character';
import AbilityPoints from '../characterSheet/AbilityPoints';
import SkillPoints from '../characterSheet/SkillPoints';
import BattlePoints from '../characterSheet/BattlePoints';
import Talents from '../characterSheet/Talents';
import Armor from '../characterSheet/Armor';
import Weapons from '../characterSheet/Weapons';
import Equip from '../characterSheet/Equip';
import Spells from '../characterSheet/Spells';

export default class Sheet {

  private character: Character;
  private abilityPoints: AbilityPoints;
  private skillPoints: SkillPoints;
  private battlePoints: BattlePoints;
  private talents: Talents;
  private armor: Armor;
  private weapons: Weapons;
  private equip: Equip;
  private spells: Spells;

  constructor(
    character: Character, 
    abilityPoints: AbilityPoints, 
    skillPoints: SkillPoints, 
    battlePoints: BattlePoints, 
    talents: Talents, 
    armor: Armor,
    weapons: Weapons,
    equip: Equip,
    spells: Spells
  ) {
    this.character = character;
    this.abilityPoints = abilityPoints;
    this.skillPoints = skillPoints;
    this.battlePoints = battlePoints;
    this.talents = talents;
    this.armor = armor;
    this.weapons = weapons;
    this.equip = equip;
    this.spells = spells;
  }

  toString() {
    return `-------------CHARACTER-------------\n
    ${this.character.toString()}
    -----------END CHARACTER---------\n`;
  }

  public getCharacter(): Character {
    return this.character;
  }

  public setCharacter(character: Character): void {
    this.character = character;
  }

  public getAbilityPoints(): AbilityPoints {
    return this.abilityPoints;
  }

  public setAbilityPoints(abilityPoints: AbilityPoints): void {
    this.abilityPoints = abilityPoints;
  }

  public getSkillPoints(): SkillPoints{
    return this.skillPoints;
  }

  public setSkillPoints(skillPoints) {
    this.skillPoints = skillPoints;
  }

  public getBattlePoints(): BattlePoints {
    return this.battlePoints;
  }

  public setBattlePoints(battlePoints: BattlePoints): void {
    this.battlePoints = battlePoints;
  }

  public getTalents(): Talents {
    return this.talents;
  }

  public setTalents(talents:  Talents) {
    this.talents = talents;
  }

  public getArmor(): Armor {
    return this.armor;
  }

  public setArmor(armor: Armor): void {
    this.armor = armor;
  }

  public getWeapons(): Weapons{
    return this.weapons;
  }

  public setWeapons(weapons: Weapons): void {
    this.weapons = weapons;
  }

  public getEquip(): Equip {
    return this.equip;
  }

  public setEquip(equip: Equip): void {
    this.equip = equip;
  }

  public getSpells(): Spells {
    return this.spells;
  }

  public setSpells(spells: Spells): void {
    this.spells = spells;
  }
}