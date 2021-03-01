import Node from "./Node";

export class LinkedList {
  head: Node<number | string> | undefined;

  insert(node: Node<number | string>) {
    if (!this.head) {
      this.head = node;
    } else {
      let last = this.head;
      while (last.next) {
        last = last.next;
      }
      last.next = node;
    }
  }

  outputList() {
    let curr = this.head;
    console.log(`Start --> ${curr?.value}`);
    while (curr?.next) {
      console.log(` --> ${curr.next.value}`);
      curr = curr.next;
    }
  }

  findValue(value: number | string): boolean {
    let foundValue = false;
    let curr = this.head;
    foundValue = curr?.value === value;
    while (curr?.next) {
      foundValue = curr?.next.value === value;
      if (foundValue) {
        return foundValue;
      }
      curr = curr.next;
    }
    return foundValue;
  }

  removeNode(value: number | string) {
    // Store head and set-up previous
    let curr = this.head;
    let prev: Node<number | string> | undefined;
    // Value is the head, reset head of list
    if (curr?.value === value) {
      this.head = curr.next;
      console.log("Found it, value was head-node");
      return;
    }

    // Look for value in the rest of the list
    while (curr && curr.value !== value) {
      prev = curr;
      curr = curr.next;
    }

    // We found it before reaching the end of the list
    // Shift the list to remove it
    if (curr) {
      if (prev) {
        prev.next = curr.next;
        console.log("Found it, value was somewhere in the middle");
        return;
      }
    }
    console.log("Node does not exist");
  }
}
