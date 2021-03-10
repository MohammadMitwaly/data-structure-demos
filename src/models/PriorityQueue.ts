export default class PriorityQueue<T> {
    values: T[];

    constructor() {
        this.values = [];
    }

    heapify(currValues: T[], index: number) {
        let size = currValues.length;
        // Find the largest among root, left child and right child
        let maxIndex = index;
        let left = 2 * maxIndex + 1;
        let right = 2 * maxIndex + 2;
        if (left < size && currValues[left] > currValues[maxIndex]) {
            maxIndex = left;
        }
        if (right < size && currValues[right] > currValues[maxIndex]) {
            maxIndex = right;
        }

        // Swap and continue heapifying if root is not largest
        if (maxIndex != index) {
            const temp = currValues[maxIndex];
            currValues[maxIndex] = currValues[index];
            currValues[index] = temp;
            this.heapify(currValues, maxIndex);
        }
    }

    addValue(currValues: T[], newValue: T) {
        const size = currValues.length;
        if (length === 0) {
            currValues.push(newValue);
        } else {
            currValues.push(newValue);
            for (let i = size / 2 - 1; i >= 0; i--) {
                this.heapify(currValues, i);
            }
        }
        this.values = currValues;
    }

    removeValue(currValues: T[], valueToRemove: T) {
        const size = currValues.length;
        let i;
        for (i = 0; i < size; i++) {
            if (valueToRemove === currValues[i]) {
                break;
            }
        }
        const temp = currValues[i];
        currValues[i] = currValues[size - 1];
        currValues[size - 1] = temp;
        currValues.pop();
        for (let j = size / 2 - 1; j >= 0; j--) {
            this.heapify(currValues, j);
        }
        this.values = currValues;
    }

    outputPriorityQueue() {
        this.values.forEach((value) => console.log(value + ' '));
    }
}
