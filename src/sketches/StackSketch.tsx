import React from 'react';
import p5Types from 'p5';
import Sketch from 'react-p5';
import Stack from '../models/Stack';

interface StackSketchProps {}

export const StackSketch: React.FC<StackSketchProps> = (
    props: StackSketchProps
) => {
    const myStack = new Stack<number>();
    myStack.push(15);
    myStack.push(20);
    myStack.push(23);
    myStack.push(8);
    myStack.push(20);
    myStack.push(23);
    myStack.push(8);
    myStack.push(20);
    myStack.push(23);
    myStack.push(8);
    myStack.push(8);
    myStack.push(8);
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(
            canvasParentRef
        );
        console.log(p5.height, window.innerHeight, myStack.maxSize);
    };

    const draw = (p5: p5Types) => {
        p5.background('#172121');
        myStack.drawStack(p5);
        p5.noLoop();
    };

    const resize = (p5: p5Types) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };

    return <Sketch setup={setup} draw={draw} windowResized={resize} />;
};
