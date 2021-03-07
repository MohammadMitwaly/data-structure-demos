import React from 'react';
import p5Types from 'p5';
import Sketch from 'react-p5';

interface CircularQueueSketchProps {}

export const CircularQueueSketch: React.FC<CircularQueueSketchProps> = (
    props: CircularQueueSketchProps
) => {
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(
            canvasParentRef
        );
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
