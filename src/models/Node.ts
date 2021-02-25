export class Node {
  left?: Node;
  right?: Node;
  value: string | number;

  constructor(value: string | number, left?: Node, right?: Node) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

  addNode(node: Node) {
    if (node.value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    } else if (node.value > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    }
  }
}
