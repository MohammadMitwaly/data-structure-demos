import React, { useState } from 'react';
import p5Types from 'p5';
import Sketch from 'react-p5';
import Stack from '../models/Stack';
import { genRandomNumber } from '../util/genRandomNumber';

interface StackSketchProps {}

const fillNumberStack = (minLimit: number, maxLimit: number) => {
    const stack = new Stack<number>();
    for (let i = 0; i < stack.maxSize; i++) {
        stack.push(genRandomNumber(minLimit, maxLimit));
    }
    return stack;
};

export const StackSketch: React.FC<StackSketchProps> = (
    props: StackSketchProps
) => {
    const [myStack, setMyStack] = useState(fillNumberStack(0, 100));

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(
            canvasParentRef
        );
    };

    const draw = (p5: p5Types) => {
        p5.background('#172121');
        myStack.drawStack(p5);
        p5.noLoop();
    };

    const resize = (p5: p5Types) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        setMyStack(fillNumberStack(0, 100));
    };

    return <Sketch setup={setup} draw={draw} windowResized={resize} />;
};
