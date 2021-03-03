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
    let xOffset = 16;
    let yOffset = 5;
    let newRow = false;
    let curr = this.head;
    this.drawStart(50, 40, p5);
    while (curr) {
      this.drawValueText(xCord, yCord, xOffset, yOffset, curr?.value, p5);
      this.drawNodeShape(xCord, yCord, p5);

      curr = curr.next;
      console.log(xCord, yCord, p5.width);
      if (!newRow) {
        let currX = xCord;
        xCord = xCord + p5.width / 9 + 30;
        let nextY =
          xCord > p5.width - 200 || xCord < 50
            ? yCord + p5.height / 14 + 45
            : yCord;
        // Curr has been reassigned to next, we don't want to draw a connection unless next exists
        if (curr) {
          this.drawConnection(
            currX,
            yCord,
            xCord < 50 ? 75 : xCord,
            nextY + 8,
            p5
          );
        }
      } else {
        let currX = xCord;
        xCord = xCord - p5.width / 9 - 30;
        let nextY =
          xCord > p5.width - 200 || xCord < 50
            ? yCord + p5.height / 14 + 45
            : yCord;
        // Curr has been reassigned to next, we don't want to draw a connection unless next exists
        if (curr) {
          this.drawConnection(currX, yCord, xCord < 50 ? 75 : xCord, nextY, p5);
        }
      }

      if (xCord > p5.width - 200) {
        newRow = true;
        yCord = yCord + p5.height / 14 + 45;
      } else if (xCord < 50) {
        newRow = false;
        xCord = 75;
        yCord = yCord = yCord + p5.height / 14 + 45;
      }
    }
  }

  drawStart(xCord: number, yCord: number, p5: p5Types) {
    p5.fill(255);
    p5.noStroke();
    p5.textAlign(p5.RIGHT);
    p5.text(`Start ⤵️`, xCord, yCord);
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
    p5.rect(xCord, yCord, p5.width / 9, p5.height / 14);
  }

  drawConnection(
    xCord: number,
    yCord: number,
    xCordOfNext: number,
    yCordOfNext: number,
    p5: p5Types
  ) {
    p5.rectMode(p5.CENTER);
    p5.stroke("#047de0");
    p5.fill(255);
    p5.rect(xCord + 45, yCord + 10, 5, 5);
    p5.line(xCord + 45, yCord + 10, xCordOfNext, yCordOfNext);
  }
}
