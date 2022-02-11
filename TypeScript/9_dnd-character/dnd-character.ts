export class DnDCharacter {
  
  readonly strength = DnDCharacter.generateAbilityScore();
  readonly dexterity = DnDCharacter.generateAbilityScore();
  readonly constitution = DnDCharacter.generateAbilityScore();
  readonly intelligence = DnDCharacter.generateAbilityScore();
  readonly wisdom = DnDCharacter.generateAbilityScore();
  readonly charisma = DnDCharacter.generateAbilityScore();
  readonly hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  
  public static generateAbilityScore(): number {
    let rolls: number[] = []
    for (let i = 0; i < 4; i++)
      rolls.push(Math.floor((Math.random() * 6) + 1))
    return rolls.sort().slice(-3).reduce((sum, roll) => sum + roll, 0)
  }
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10)/2);
  }
}