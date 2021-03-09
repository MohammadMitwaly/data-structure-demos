import React, { useState } from 'react';
import p5Types from 'p5';
import Sketch from 'react-p5';
import CircularQueue from '../models/CircularQueue';
import { genRandomNumber } from '../util/genRandomNumber';

interface CircularQueueSketchProps {}

const fillNumberQueue = (minLimit: number, maxLimit: number) => {
    const queue = new CircularQueue<number>();
    for (let i = 0; i < queue.maxSize; i++) {
        queue.enQueue(genRandomNumber(minLimit, maxLimit));
    }
    return queue;
};

export const CircularQueueSketch: React.FC<CircularQueueSketchProps> = (
    props: CircularQueueSketchProps
) => {
    const [myQueue, setMyQueue] = useState(fillNumberQueue(0, 100));

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(
            canvasParentRef
        );
        console.log(myQueue);
    };

    const draw = (p5: p5Types) => {
        p5.background('#172121');
        myQueue.drawQueue(p5);
        p5.noLoop();
    };

    const resize = (p5: p5Types) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        setMyQueue(fillNumberQueue(0, 100));
    };

    return <Sketch setup={setup} draw={draw} windowResized={resize} />;
};
