//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  concat(listOfLists) {
    const newList = new List(this.values);
    listOfLists.values.forEach((list) => newList.append(list));
    return newList;
  }

  filter(fn) {
    const filtered = [];

    for (const val of this.values) {
      if (fn(val)) filtered.push(val);
    }
    return new List(filtered);
  }

  map(fn) {
    const mapped = [];

    for (const val of this.values) {
      mapped.push(fn(val));
    }
    return new List(mapped);
  }

  length() {
    return this.values.length;
  }

  foldl(fn, acc) {
    let res = acc;
    for (let i of this.values) {
      res = fn(res, i);
    }
    return res;
  }

  foldr(fn, acc) {
    let res = acc;
    for (let i = this.values.length - 1; i >= 0; i--) {
      res = fn(res, this.values[i]);
    }
    return res;
  }

  reverse() {
    let reversed = [];

    for (let i = 0; i < this.values.length; i++) {
      reversed = [this.values[i], ...reversed];
    }
    return new List(reversed);
  }
}
