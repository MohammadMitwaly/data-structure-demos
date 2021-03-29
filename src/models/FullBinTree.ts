import { BinNode } from './BinNode';

export default class FullBinaryTree extends BinNode {
    /*
    A full Binary tree is a special type of binary tree
    in which every parent node/internal node has either two or no children.
    Source: https://www.programiz.com/dsa/full-binary-tree
    */

    constructor(value: string | number, left?: BinNode, right?: BinNode) {
        super(value, left, right);
    }

    isFullBinTree(node: BinNode): boolean {
        if (!node) {
            return true;
        }

        if (!node.left && !node.right) {
            return true;
        }

        if (node.left && node.right) {
            return (
                this.isFullBinTree(node.left) && this.isFullBinTree(node.right)
            );
        }

        return false;
    }
}
