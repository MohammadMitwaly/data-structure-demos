import { BinNode } from './BinNode';

export default class FullBinaryTree extends BinNode {
    constructor(value: string | number, left?: BinNode, right?: BinNode) {
        super(value, left, right);
    }

    isFullBinTree(node: BinNode): boolean {
        /*
        // Checking tree emptiness
        if (node == null) return true;

        // Checking the children
        if (node.leftChild == null && node.rightChild == null) return true;

        if (node.leftChild != null && node.rightChild != null)
            return (
                isFullBinaryTree(node.leftChild) &&
                isFullBinaryTree(node.rightChild)
            );

        return false;
        */
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
