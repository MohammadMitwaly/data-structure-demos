import React from 'react';
import p5Types from 'p5';
import Sketch from 'react-p5';
import { BinNode } from '../models/BinNode';
import BST from '../models/BST';

interface BinarySearchTreeSketchProps {}

export const SketchBST: React.FC<BinarySearchTreeSketchProps> = (
    props: BinarySearchTreeSketchProps
) => {
    const root = new BinNode(100);
    root.xCo = window.innerWidth / 2;
    root.yCo = 100;
    let rootBST = new BST(root);
    rootBST.addNode(new BinNode(15, undefined, undefined, rootBST));
    rootBST.addNode(new BinNode(11, undefined, undefined, rootBST));
    rootBST.addNode(new BinNode(3, undefined, undefined, rootBST));
    rootBST.addNode(new BinNode(60, undefined, undefined, rootBST));
    rootBST.addNode(new BinNode(30, undefined, undefined, rootBST));
    rootBST.addNode(new BinNode(31, undefined, undefined, rootBST));
    rootBST.addNode(new BinNode(110, undefined, undefined, rootBST));
    rootBST.traverseInOrder();
    console.log(rootBST);
    rootBST.printParent(rootBST.root);

    //See annotations in JS for more information
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(
            canvasParentRef
        );
    };

    const draw = (p5: p5Types) => {
        p5.background('#172121');
        rootBST.draw(p5, rootBST.root);
        p5.noLoop();
    };

    return <Sketch setup={setup} draw={draw} />;
};
