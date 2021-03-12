import React from 'react';
import p5Types from 'p5';
import Sketch from 'react-p5';
import { createFillDoublyLinkedListNumbers } from '../util/fillLinkedList';

interface DoublyLinkedListSketchProps {}

export const DoublyLinkedListSketch: React.FC<DoublyLinkedListSketchProps> = (
    props: DoublyLinkedListSketchProps
) => {
    const linkedListOfNumbers = createFillDoublyLinkedListNumbers(18, 42, 720);

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(
            canvasParentRef
        );
        linkedListOfNumbers.outputList();
    };

    const draw = (p5: p5Types) => {
        p5.background('#172121');
        p5.noLoop();
    };

    const resize = (p5: p5Types) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };

    return <Sketch setup={setup} draw={draw} windowResized={resize} />;
};
