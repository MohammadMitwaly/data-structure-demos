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

    isFull(): boolean {
        return this.values.length === this.maxSize;
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
        let stackWidth = 100;
        let stackHeight = p5.height - 50;
        this.drawShape(xCord, yCord, stackWidth, stackHeight, p5);
        this.drawStackItems(xCord, yCord, p5);

        this.drawStart(xCord, yCord, stackWidth, stackHeight, p5);
    }

    drawShape(
        xCord: number,
        yCord: number,
        stackWidth: number,
        stackHeight: number,
        p5: p5Types
    ) {
        p5.rectMode(p5.CENTER);
        p5.stroke(255);
        p5.noFill();
        p5.rect(xCord, p5.height / 2, stackWidth, stackHeight);
        p5.stroke('#172121');
        p5.line(
            xCord - stackWidth / 2,
            (p5.height - stackHeight) / 2,
            xCord + stackWidth / 2,
            (p5.height - stackHeight) / 2
        );
    }

    drawStackItems(xCord: number, yCord: number, p5: p5Types) {
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
}
