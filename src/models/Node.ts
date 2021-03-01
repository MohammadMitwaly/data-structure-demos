export default class Node<T> {
  value: T;
  next: Node<T> | undefined;

  constructor(value: T, next?: Node<T>) {
    this.value = value;
    this.next = next;
  }
}
