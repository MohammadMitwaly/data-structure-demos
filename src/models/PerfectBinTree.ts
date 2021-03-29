import { rootCertificates } from 'node:tls';
import { BinNode } from './BinNode';

export default class PerfectBinTree extends BinNode {
    /*
    A perfect binary tree is a type of binary tree 
    in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.
    Source: https://www.programiz.com/dsa/perfect-binary-tree
    */

    /*
    Perfect Binary Tree Theorems:
        - A perfect binary tree of height h has 2h + 1 – 1 node.
        - A perfect binary tree with n nodes has height log(n + 1) – 1 = Θ(ln(n)).
        - A perfect binary tree of height h has 2h leaf nodes.
        - The average depth of a node in a perfect binary tree is Θ(ln(n)).
    */
    constructor(value: string | number, left?: BinNode, right?: BinNode) {
        super(value, left, right);
    }

    getDepth(node: BinNode | undefined): number {
        let depth = 0;
        while (node) {
            depth++;
            node = node.left;
        }

        return depth;
    }

    isPerferct(
        node: BinNode | undefined,
        depth: number,
        level: number
    ): boolean {
        if (!node) {
            return true;
        }

        if (!node.left && !node.right) {
            return depth === level + 1;
        }

        if (!node.left || !node.right) {
            return false;
        }

        level++;
        return (
            this.isPerferct(node.left, depth, level) &&
            this.isPerferct(node.right, depth, level)
        );
    }
}
