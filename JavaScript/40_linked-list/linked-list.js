//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    if (!this.head) {
      this.head = new Node(data, null);
      return;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(data);
    return;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let node = this.head;

    if (!node.next) {
      const popped = node.data;
      this.head = null;
      return popped;
    }
    while (node.next.next) {
      node = node.next;
    }
    const popped = node.next;
    node.next = null;
    return popped.data;
  }

  shift() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    this.head = node.next;
    return node.data;
  }

  unshift(data) {
    if (!this.head) {
      this.head = new Node(data, null);
    }
    let node = this.head;
    this.head = new Node(data, node);
  }

  delete(data) {
    let node = this.head;
    if (!node) {
      return null;
    }
    let nextNode = node.next;
    if (node.data === data) {
      this.head = node.next;
      return;
    }
    while (nextNode) {
      if (nextNode.data === data) {
        node.next = nextNode.next;
      }
      node = node.next;
      nextNode = nextNode.next;
    }
  }

  count() {
    let count = 0;
    let node = this.head;
    if (!node) {
      return count;
    }

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}
