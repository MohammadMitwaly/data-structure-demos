import { genRandomNumber } from "./genRandomNumber";
import Node from "../models/Node";
import { LinkedList } from "../models/LinkedList";

export const createFillLinkedListNumbers = (
  amount: Number,
  minNumber: number,
  maxNumber: number
) => {
  const list = new LinkedList();
  const headNode = new Node(genRandomNumber(minNumber, maxNumber));
  list.insert(headNode);
  for (let i = 0; i < amount; i++) {
    list.insert(new Node(genRandomNumber(minNumber, maxNumber)));
  }
  return list;
};
