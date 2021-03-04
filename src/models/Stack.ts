import p5Types from 'p5';

export default class Stack<T> {
    // We limit the size based on the amount of items we can show
    maxSize: number = Math.floor((window.innerHeight - 50) / 50);
    values: T[];

    constructor() {
        this.values = [];
    }

    isEmpty(): boolean {
        return this.values.length === 0;
    }

    push(value: T) {
        if (this.values.length >= this.maxSize) {
            console.log(`StackOverflow my guy`);
        } else {
            this.values.push(value);
        }
    }

    pop() {
        if (this.values.length === 0) {
            console.log(`Stack underflow my guy`);
        } else {
            return this.values.pop();
        }
    }

    peek() {
        if (this.values.length === 0) {
            console.log(`Stack underflow my guy`);
        } else {
            return this.values[this.values.length - 1];
        }
    }

    drawStack(p5: p5Types) {
        let xCord = p5.width / 2;
        let yCord = p5.height - 50;

        this.values.forEach((value) => {
            p5.fill(255);
            p5.noStroke();
            p5.textAlign(p5.CENTER);
            p5.text(`Value➡️${value || 'null'}`, xCord, yCord);
            p5.rectMode(p5.CENTER);
            p5.stroke(255);
            p5.noFill();
            p5.rect(xCord, yCord, 75, 50);
            yCord -= 50;
        });
    }
}
