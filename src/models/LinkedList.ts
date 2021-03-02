import Node from "./Node";
import p5Types from "p5";

export class LinkedList {
  head: Node<number | string> | undefined;
  // Adding length to optimize "search" by index
  // The logic breaks if we are trying to add a chain of nodes
  // TODO: Fix logic
  lengthOfList: number = 0;

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
    this.lengthOfList++;
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

  removeNodeByValue(value: number | string) {
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

  removeNodeByPosition(position: number) {
    if (position > this.lengthOfList) {
      console.log("Node position does not exist");
      return;
    }

    let curr = this.head;
    let prev: Node<number | string> | undefined;

    if (position === 0 && curr) {
      this.head = curr.next;
      console.log("Node was head");
      return;
    }

    let currIndex = 0;
    while (curr) {
      if (currIndex === position) {
        if (prev) {
          prev.next = curr.next;
          console.log("Found it, value was somewhere in the middle");
          return;
        }
      }
      currIndex++;
      prev = curr;
      curr = curr.next;
    }
  }

  /* Drawing logic */
  drawList(p5: p5Types) {
    let xCord = 75;
    let yCord = 75;
    let xOffset = xCord / 10;
    let yOffset = yCord / 10;
    let curr = this.head;
    this.drawValueText(xCord, yCord, xOffset, yOffset, curr?.value, p5);
    this.drawNodeShape(xCord, yCord, p5);

    p5.rectMode(p5.CENTER);
    p5.stroke(255);
    p5.fill(255);
    p5.rect(xCord + 50, yCord + 10, 5, 5);
    p5.line(xCord + 50, yCord + 10, xCord + 100, yCord + 10);
    p5.push();
    p5.translate(xCord + 100, yCord + 10);
    p5.rotate(0.2);
    p5.triangle(
      xCord + 100,
      yCord + 10,
      xCord + 95,
      yCord + 20,
      xCord + 105,
      yCord + 20
    );
    p5.pop();
  }

  drawValueText(
    xCord: number,
    yCord: number,
    xOffset: number,
    yOffset: number,
    value: number | string | undefined,
    p5: p5Types
  ) {
    p5.fill(255);
    p5.noStroke();
    p5.textAlign(p5.RIGHT);
    p5.text(`Value➡️${value || "null"}`, xCord + xOffset, yCord - yOffset);
  }

  drawNodeShape(xCord: number, yCord: number, p5: p5Types) {
    p5.rectMode(p5.CENTER);
    p5.stroke(255);
    p5.noFill();
    p5.rect(xCord, yCord, p5.width / 10, p5.height / 15);
  }

  drawArrow(
    base: p5Types.Vector,
    vec: p5Types.Vector,
    myColor: string,
    p5: p5Types
  ) {
    p5.push();

    p5.stroke(myColor);
    p5.strokeWeight(3);
    p5.fill(myColor);
    p5.translate(base.x, base.y);
    p5.line(0, 0, vec.x, vec.y);

    p5.rotate(vec.heading());
    let arrowSize = 7;
    p5.translate(vec.mag() - arrowSize, 0);
    p5.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    p5.pop();
  }
}
