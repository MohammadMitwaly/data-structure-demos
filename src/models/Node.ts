export class Node {
  left?: Node;
  right?: Node;
  value: string | number;

  constructor(value: string | number, left?: Node, right?: Node) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

  addNodeBST(node: Node) {
    if (node.value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.addNodeBST(node);
      }
    } else if (node.value > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.addNodeBST(node);
      }
    }
  }

  traverseInOrder(node: Node | undefined, arr: number[] | string[]) {
    if (!node) {
      return;
    }
    this.traverseInOrder(node.left, arr);
    //@ts-ignore
    arr.push(node.value);
    this.traverseInOrder(node.right, arr);
  }
}
