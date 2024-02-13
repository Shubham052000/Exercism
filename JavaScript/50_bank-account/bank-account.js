//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance;
  constructor() {
    this.#balance = 0;
    this.active = false;
  }

  open() {
    if(this.active){
      throw new ValueError();
    }
    this.active = true;
  }

  close() {
    if(!this.active){
      throw new ValueError();
    }
    this.#balance = 0;
    this.active = false;
  }

  deposit(amt) {
    if(amt <= 0 || !this.active){
      throw new ValueError();
    }
    this.#balance += amt;
  }

  withdraw(amt) {
    if(amt > this.#balance || amt <= 0){
      throw new ValueError();
    }
    this.#balance -= amt;
  }

  get balance() {
    if(!this.active){
      throw new ValueError();
    }
    return this.#balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
