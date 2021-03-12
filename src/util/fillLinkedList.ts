import { genRandomNumber } from './genRandomNumber';
import Node from '../models/Node';
import { LinkedList } from '../models/LinkedList';
import DoublyLinkedList from '../models/DoublyLinkedList';

export const createFillLinkedListNumbers = (
    amount: number,
    minNumber: number,
    maxNumber: number
) => {
    let list = new LinkedList();
    list = createFillList(amount, minNumber, maxNumber, list);
    return list;
};

export const createFillDoublyLinkedListNumbers = (
    amount: number,
    minNumber: number,
    maxNumber: number
) => {
    let list = new DoublyLinkedList();
    list = createFillList(amount, minNumber, maxNumber, list);
    return list;
};

const createFillList = (
    amount: number,
    minNumber: number,
    maxNumber: number,
    list: LinkedList | DoublyLinkedList
) => {
    const headNode = new Node(genRandomNumber(minNumber, maxNumber));
    list.insert(headNode);
    for (let i = 0; i < amount; i++) {
        list.insert(new Node(genRandomNumber(minNumber, maxNumber)));
    }
    return list;
};
