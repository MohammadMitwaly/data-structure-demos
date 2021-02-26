import React from "react";
import p5Types from "p5";
import Sketch from "react-p5";
import { Node } from "../models/Node";
import BST from "../models/BST";

interface SketchBSTProps {}

export const SketchBST: React.FC<SketchBSTProps> = (props: SketchBSTProps) => {
  const root = new Node(10);
  let rootBST = new BST(root);
  rootBST.addNode(new Node(15));
  rootBST.addNode(new Node(11));
  rootBST.addNode(new Node(3));
  rootBST.addNode(new Node(6));
  rootBST.traverseInOrder();
  console.log(rootBST.valuesInOrder);

  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background("#172121");
  };

  return <Sketch setup={setup} draw={draw} />;
};
