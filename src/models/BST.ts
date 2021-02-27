import { Node } from "./Node";
import p5Types from "p5";

export default class BST {
  root: Node;
  valuesInOrder: number[] | string[] = [];
  rootX: number;
  rootY: number;

  constructor(node: Node) {
    this.root = node;
    this.rootX = node.xCo;
    this.rootY = node.yCo;
  }

  draw(p5: p5Types, node: Node | undefined) {
    if (!node) {
      return;
    }
    p5.fill(p5.random(255), p5.random(255), p5.random(255));
    let size = 10;
    p5.ellipse(node.xCo, node.yCo, size, size);
    this.draw(p5, node.left);
    this.draw(p5, node.right);
  }

  // Wrapper methods
  traverseInOrder() {
    this.root.traverseInOrder(this.root, this.valuesInOrder);
  }

  addNode(node: Node) {
    var shiftedNode = this.root.addValue(node.value);
    this.setCoordinates(shiftedNode);
  }

  setCoordinates(node: Node) {
    if (node === this.root) {
      node.setCoordinates(this.rootX, this.rootY);
    } else if (node) {
      node.setCoordinates();
    }
  }
}
