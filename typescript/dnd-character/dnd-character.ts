export class DnDCharacter {
  public strength: number
  public dexterity: number
  public constitution: number
  public intelligence: number
  public wisdom: number
  public charisma: number
  public hitpoints: number

  public constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    const rolls = [...Array(4)].map(() => DnDCharacter.generateRandomDieRoll());

    return rolls.sort().slice(1).reduce((sum, roll) => sum + roll);
  }

  public static getModifierFor(abilityValue: number): number {
    if (abilityValue < 3) {
      throw new Error('Ability scores must be at least 3');
    }

    if (abilityValue > 18) {
      throw new Error('Ability scores can be at most 18');
    }

    return Math.floor((abilityValue - 10) / 2);
  }

  private static generateRandomDieRoll(dieFaces: number = 6): number {
    return Math.floor(Math.random() * dieFaces) + 1;
  }
}
