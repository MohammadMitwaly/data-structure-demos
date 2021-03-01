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
}
