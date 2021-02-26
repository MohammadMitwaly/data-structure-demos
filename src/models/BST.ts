import { Node } from "./Node";

export default class BST {
  root: Node;
  valuesInOrder: number[] | string[] = [];

  constructor(node: Node) {
    this.root = node;
  }

  // Wrapper methods
  traverseInOrder() {
    this.root.traverseInOrder(this.root, this.valuesInOrder);
  }

  addNode(node: Node) {
    this.root.addNodeBST(node);
  }
}
