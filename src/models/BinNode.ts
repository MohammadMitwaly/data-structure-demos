import BST from './BST';

export class BinNode {
    left?: BinNode;
    right?: BinNode;
    parent?: BinNode;
    root?: BST;
    isRightInner?: boolean;
    value: string | number;
    xCo: number;
    yCo: number;
    rightSpacing: number;
    leftSpacing: number;
    cumulativeRightSpacing: number;
    cumulativeLeftSpacing: number;
    // Constants controlling the positions of the nodes relative to one another
    static HORIZONTALSPACING = 20; // Horizontal distance between two nodes
    static VERTICALSPACING = 50; // Vertical distance between tow nodes

    constructor(
        value: string | number,
        left?: BinNode,
        right?: BinNode,
        root?: BST
    ) {
        this.left = left;
        this.right = right;
        this.value = value;
        this.xCo = 0;
        this.yCo = 0;
        this.root = root;
        // The horizontal space between this node and its left/right children
        this.rightSpacing = 0;
        this.leftSpacing = 0;
        this.cumulativeRightSpacing = 0;
        this.cumulativeLeftSpacing = 0;
    }

    addNodeBST(node: BinNode) {
        if (node.value < this.value) {
            //@ts-ignore
            if (node.value < this.root?.root.value) {
                node.isRightInner = false;
            }
            if (!this.left) {
                node.parent = this;
                this.left = node;
                this.left.xCo = this.xCo - 50;
                this.left.yCo = this.yCo + 20;
                node.leftSpacing =
                    this.cumulativeRightSpacing + BinNode.HORIZONTALSPACING;
                node.cumulativeLeftSpacing =
                    node.leftSpacing + this.cumulativeLeftSpacing;
            } else {
                this.left.addNodeBST(node);
            }
        } else if (node.value > this.value) {
            //@ts-ignore
            if (node.value > this.root?.root.value) {
                node.isRightInner = true;
            }
            if (!this.right) {
                node.parent = this;
                this.right = node;
                this.right.xCo = this.xCo + 50;
                this.right.yCo = this.yCo + 20;
                node.rightSpacing =
                    this.cumulativeLeftSpacing + BinNode.HORIZONTALSPACING;
                node.cumulativeRightSpacing =
                    this.cumulativeRightSpacing + node.rightSpacing;
            } else {
                this.right.addNodeBST(node);
            }
        }
    }

    traverseInOrder(node: BinNode | undefined, arr: number[] | string[]) {
        if (!node) {
            return;
        }
        this.traverseInOrder(node.left, arr);
        //@ts-ignore
        arr.push(node.value);
        this.traverseInOrder(node.right, arr);
    }

    setCoordinates(x: number, y: number) {
        this.xCo = x;
        this.yCo = y;
    }
}
