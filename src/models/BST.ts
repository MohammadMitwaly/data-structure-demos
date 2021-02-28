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
    p5.fill(255);
    p5.noStroke();
    let size = 30;
    p5.textAlign(p5.CENTER);
    let x = node.xCo + node.leftSpacing + node.rightSpacing;
    let y = node.yCo + node.leftSpacing + node.rightSpacing;
    p5.text(node.value, x, y);
    p5.stroke(255);
    p5.noFill();
    p5.ellipse(x, y, size, size);
    //@ts-ignore
    p5.line(
      //@ts-ignore
      node.parent?.xCo + node.parent?.leftSpacing + node.parent?.rightSpacing,
      //@ts-ignore
      node.parent?.yCo + node.parent?.rightSpacing + node.parent?.leftSpacing,
      x,
      y
    );
    this.draw(p5, node.left);
    this.draw(p5, node.right);
  }

  // Wrapper methods
  traverseInOrder() {
    this.root.traverseInOrder(this.root, this.valuesInOrder);
  }

  addNode(node: Node) {
    this.root.addNodeBST(node);
  }

  printParent(node: Node) {
    if (node.parent) console.log(`${node.parent?.value} --> ${node.value}`);
    if (node.left) this.printParent(node.left);
    if (node.right) this.printParent(node.right);
  }
}
