export default class Deque<T> {
    maxSize: number = 10;
    values: T[];
    private frontIndex: number;
    private rearIndex: number;

    constructor(size: number) {
        this.values = [];
        this.frontIndex = -1;
        this.rearIndex = -1;
    }

    isEmpty(): boolean {
        return this.frontIndex === -1;
    }

    isFull(): boolean {
        return (
            (this.frontIndex === 0 &&
                this.rearIndex == this.values.length - 1) ||
            this.frontIndex === this.rearIndex + 1
        );
    }

    addToFront(value: T) {
        if (this.isFull()) {
            console.log('Queue overflow');
            return;
        }

        if (this.isEmpty()) {
            this.frontIndex = 0;
            this.rearIndex = 0;
        } else if (this.frontIndex == 0) {
            this.frontIndex = this.values.length - 1;
        } else {
            this.frontIndex = this.frontIndex - 1;
        }
        this.values[this.frontIndex] = value;
    }

    addToRear(value: T) {
        if (this.isFull()) {
            console.log('Queue overflow');
            return;
        }

        if (this.isEmpty()) {
            this.frontIndex = 0;
            this.rearIndex = 0;
        } else if (this.rearIndex == this.values.length - 1) {
            this.rearIndex = 0;
        } else {
            this.rearIndex = this.rearIndex + 1;
        }
        this.values[this.rearIndex] = value;
    }

    deleteFromFront() {
        if (this.isEmpty()) {
            console.log('Queue underflow');
            return;
        }

        // Deque has only one element
        if (this.frontIndex === this.rearIndex) {
            this.frontIndex = -1;
            this.rearIndex = -1;
            this.values.pop();
        } else if (this.frontIndex === this.values.length - 1) {
            this.frontIndex = 0;
            this.values.pop();
        } else {
            this.values.splice(this.frontIndex, 1);
            this.frontIndex = this.frontIndex + 1;
        }
    }

    deleteFromRear() {
        if (this.isEmpty()) {
            console.log('Queue underflow');
            return;
        }

        // Deque has only one element
        if (this.frontIndex === this.rearIndex) {
            this.frontIndex = -1;
            this.rearIndex = -1;
            this.values.pop();
        } else if (this.rearIndex === 0) {
            this.values.splice(this.rearIndex, 1);
            this.rearIndex = this.values.length - 1;
        } else {
            this.values.splice(this.rearIndex, 1);
            this.rearIndex = this.rearIndex - 1;
        }
    }

    get frontValue(): T | number {
        if (this.isEmpty()) {
            console.log('Undeflow, Deque is empty');
            return -1;
        }
        const valueToReturn = this.values[this.frontIndex];
        this.deleteFromFront();
        return valueToReturn;
    }

    get rearValue(): T | number {
        if (this.isEmpty() || this.rearIndex < 0) {
            console.log('Undeflow, Deque is empty');
            return -1;
        }
        const valueToReturn = this.values[this.rearIndex];
        this.deleteFromRear();
        return valueToReturn;
    }
}
