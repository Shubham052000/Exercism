export class Gigasecond {
  #giga = 1000000000
  dateValue: Date;
  constructor(date: Date){
    this.dateValue = date;
  }
  public date() {
    const toReturn = new Date(this.dateValue)
    return new Date(toReturn.setSeconds(this.#giga + toReturn.getSeconds()))
  }
}
