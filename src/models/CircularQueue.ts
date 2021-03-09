import p5Types from 'p5';

export default class CircularQueue<T> {
    maxSize: number = Math.floor((window.innerWidth - 75) / 80);
    frontIndex: number;
    rearIndex: number;
    values: T[];

    constructor() {
        this.values = [];
        this.frontIndex = -1;
        this.rearIndex = -1;
    }

    isFull(): boolean {
        if (this.frontIndex === 0 && this.rearIndex === this.maxSize - 1) {
            return true;
        }
        if (this.frontIndex === this.rearIndex + 1) {
            return true;
        }
        return false;
    }

    isEmpty(): boolean {
        if (this.frontIndex === -1) {
            return true;
        }
        return false;
    }

    resetQueue() {
        this.frontIndex = -1;
        this.rearIndex = -1;
    }

    enQueue(value: T) {
        if (this.isFull()) {
            console.log('Queue is full, no more room.');
        } else {
            // If this is the first item
            if (this.frontIndex === -1) {
                this.frontIndex = 0;
            }
            // Determine rear position dynamically, in a circular manner
            this.rearIndex = (this.rearIndex + 1) % this.maxSize;
            this.values[this.rearIndex] = value;
        }
    }

    deQueue() {
        let valueToBeDequeue: T;
        if (this.isEmpty()) {
            console.log('Nothing to return, Queue is empty');
            return undefined;
        } else {
            valueToBeDequeue = this.values[this.frontIndex];

            if (this.frontIndex === this.rearIndex) {
                // This is the last element, so we reset
                this.resetQueue();
            } else {
                this.frontIndex = (this.frontIndex + 1) % this.maxSize;
            }
            return valueToBeDequeue;
        }
    }

    printQueue() {
        let index = this.frontIndex;
        if (this.isEmpty()) {
            console.log('Queue has no items');
            return;
        }
        console.log(`Front ➡️ ${index}`);
        console.log(`Items ➡️ `);
        for (; index !== this.rearIndex; index = (index + 1) % this.maxSize) {
            console.log(`${this.values[index]} ➡️ `);
        }
        // Last item
        console.log(`${this.values[index]}`);
        console.log(`Rear ➡️ ${this.rearIndex}`);
    }

    drawQueue(p5: p5Types) {
        let xCord = 50;
        let yCord = p5.height / 2;
        let queueWidth = p5.width - 50;
        let queueHeight = 50;
        this.drawShape(xCord, yCord, 70, p5);
        this.drawQueueItems(xCord, yCord, p5);
        this.drawFront(xCord, queueHeight, p5);
        this.drawRear(queueHeight, queueWidth, p5);
    }

    drawShape(
        xCord: number,
        yCord: number,
        queueItemHeight: number,
        p5: p5Types
    ) {
        p5.stroke(255);
        p5.line(xCord, yCord, p5.width - 50, yCord);
        p5.line(xCord, yCord + queueItemHeight, p5.width - 50, yCord + 70);
    }

    drawQueueItems(xCord: number, yCord: number, p5: p5Types) {
        xCord = xCord + xCord / 2;
        yCord = yCord + 35;
        this.values.forEach((value) => {
            p5.fill(255);
            p5.noStroke();
            p5.textAlign(p5.CENTER);
            p5.text(`Value➡️${value || 'null'}`, xCord, yCord);
            p5.rectMode(p5.CENTER);
            p5.stroke(255);
            p5.noFill();
            p5.rect(xCord, yCord, 75, 50);
            xCord += 80;
        });
    }

    drawStart(
        xCord: number,
        yCord: number,
        stackWidth: number,
        stackHeight: number,
        p5: p5Types
    ) {
        p5.fill(255);
        p5.noStroke();
        p5.textAlign(p5.CENTER);
        p5.text(`Start ⬇️`, xCord, (p5.height - stackHeight) / 2);
    }

    drawFront(xCord: number, queueHeight: number, p5: p5Types) {
        p5.fill(255);
        p5.noStroke();
        p5.textAlign(p5.CENTER);
        p5.text(`Front ⬇️`, xCord, (p5.height - queueHeight) / 2);
    }

    drawRear(queueHeight: number, queueWidth: number, p5: p5Types) {
        p5.fill(255);
        p5.noStroke();
        p5.textAlign(p5.CENTER);
        p5.text(`Rear ⬇️`, queueWidth, (p5.height - queueHeight) / 2);
    }
}
