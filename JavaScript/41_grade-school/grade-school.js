//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.db = {};
  }
  roster() {
    return JSON.parse(JSON.stringify(this.db));
  }

  add(name, grade) {
    for (let prop in this.db) {
      if (this.db[prop].includes(name)) {
        this.db[prop].splice(this.db[prop].indexOf(name), 1);
      }
    }
    if (!this.db[grade]) {
      this.db[grade] = [name];
      return;
    }
    this.db[grade].push(name);
    this.db[grade].sort();
  }

  grade(gr) {
    if (!this.db[gr]) {
      return [];
    }
    return JSON.parse(JSON.stringify(this.db[gr]));
  }
}
