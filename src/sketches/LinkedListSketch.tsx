import React from "react";
import p5Types from "p5";
import Sketch from "react-p5";
import { createFillLinkedListNumbers } from "../util/fillLinkedList";

interface LinkedListSketchProps {}

export const LinkedListSketch: React.FC<LinkedListSketchProps> = (
  props: LinkedListSketchProps
) => {
  const linkedListOfNumbers = createFillLinkedListNumbers(6, 42, 720);
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    console.log(linkedListOfNumbers);
  };

  const draw = (p5: p5Types) => {
    p5.background("#172121");
    linkedListOfNumbers.drawList(p5);
    p5.noLoop();
  };

  return <Sketch setup={setup} draw={draw} />;
};
