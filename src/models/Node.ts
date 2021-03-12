export default class Node<T> {
    value: T;
    next: Node<T> | undefined;
    previous?: Node<T> | undefined;

    constructor(value: T, next?: Node<T>, previous?: Node<T>) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}
