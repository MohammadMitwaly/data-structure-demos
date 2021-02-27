export class Node {
  left?: Node;
  right?: Node;
  parent?: Node;
  value: string | number;
  xCo: number;
  yCo: number;
  rightSpacing: number;
  leftSpacing: number;
  cumulativeRightSpacing: number;
  cumulativeLeftSpacing: number;
  // Constants controlling the positions of the nodes relative to one another
  static HORIZONTALSPACING = 15; // Horizontal distance between two nodes
  static VERTICALSPACING = 50; // Vertical distance between tow nodes

  constructor(value: string | number, left?: Node, right?: Node) {
    this.left = left;
    this.right = right;
    this.value = value;
    this.xCo = 0;
    this.yCo = 0;
    // The horizontal space between this node and its left/right children
    this.rightSpacing = 0;
    this.leftSpacing = 0;
    this.cumulativeRightSpacing = 0;
    this.cumulativeLeftSpacing = 0;
  }

  addNodeBST(node: Node) {
    if (node.value < this.value) {
      if (!this.left) {
        this.left = node;
        node.parent = this.left;
        this.leftSpacing =
          this.left.cumulativeRightSpacing + Node.HORIZONTALSPACING;
        this.cumulativeLeftSpacing =
          this.left.cumulativeLeftSpacing + this.leftSpacing;
      } else {
        this.left.addNodeBST(node);
      }
    } else if (node.value > this.value) {
      if (!this.right) {
        this.right = node;
        node.parent = this.right;
        this.rightSpacing =
          this.right.cumulativeLeftSpacing + Node.HORIZONTALSPACING;
        this.cumulativeRightSpacing =
          this.right.cumulativeRightSpacing + this.rightSpacing;
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

  setCoordinates(x?: number, y?: number) {
    if (this.value !== undefined) {
      if (!x && !y) {
        // No coordinates were passed into the function
        if (this.parent && this.value < this.parent.value) {
          // Left node
          this.xCo = this.parent.xCo - this.parent.leftSpacing;
        } else if (this.parent && this.value > this.parent.value) {
          // Right node
          this.xCo = this.parent.xCo + this.parent.rightSpacing;
        }

        if (this.parent) this.yCo = this.parent.yCo + Node.VERTICALSPACING;
      } else {
        // Coordinates were passed into the function
        // @ts-ignore
        this.xCo = x;
        // @ts-ignore
        this.yCo = y;
      }

      if (this.left) this.left.setCoordinates();
      if (this.right) this.right.setCoordinates();
    }
  }

  isFilled() {
    return this.value !== null;
  }

  addValue(value: number | string) {
    if (!this.isFilled()) {
      // If the node hasn't been filled yet, fill this node with the value
      // This node needs to have its coordinates set, to return this

      this.value = value;
      this.left = new Node(this.value);
      this.right = new Node(this.value);

      return this;
    } else if (value < this.value && this.left) {
      // The value is less than this node's value, so it belongs to the left

      let initialLeftSpacing =
        this.left.cumulativeRightSpacing + Node.HORIZONTALSPACING;

      // Add this value to the left half of the tree
      let shiftedNode: any = this.left.addValue(value);

      // To prevent overlapping nodes, the left child should be offset
      // slightly farther to the left than all the space taken up to the
      // right of the left node
      this.leftSpacing =
        this.left.cumulativeRightSpacing + Node.HORIZONTALSPACING;

      // Update total spacing taken up to the left of this node
      this.cumulativeLeftSpacing =
        this.left.cumulativeLeftSpacing + this.leftSpacing;

      // If this node's left spacing changed, then the coordinates of its
      // left child must be updated to account for this change, so return
      // the left child
      if (this.leftSpacing !== initialLeftSpacing) {
        return this.left;
      }

      // If the left spacing didn't change, return the lower node that
      // needs to be adjusted
      return shiftedNode;
    } else if (value > this.value && this.right) {
      // The value is greater than this node's value, so it belongs to the left

      // The code below parallels the code above, but handles adding nodes
      // to the right half of this node

      let rightSpacing =
        this.right.cumulativeLeftSpacing + Node.HORIZONTALSPACING;

      let shiftedNode: any = this.right.addValue(value);

      this.rightSpacing =
        this.right.cumulativeLeftSpacing + Node.HORIZONTALSPACING;

      this.cumulativeRightSpacing =
        this.right.cumulativeRightSpacing + this.rightSpacing;

      if (this.rightSpacing !== rightSpacing) {
        return this.right;
      }

      return shiftedNode;
    }
  }
}
