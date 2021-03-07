export default class CircularQueue<T> {
    maxSize: number = 8;
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
}
