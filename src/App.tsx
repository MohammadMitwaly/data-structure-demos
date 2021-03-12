import React, { useState } from 'react';
import './App.css';
import { LinkedListSketch } from './sketches/LinkedListSketch';
import { SketchBST } from './sketches/BinarySearchTreeSketch';
import { StackSketch } from './sketches/StackSketch';
import { CircularQueueSketch } from './sketches/CircularQueueSketch';
import { DoublyLinkedListSketch } from './sketches/DoublyLinkedListSketch';

const App = () => {
    const [currentSketch, setCurrentSketch] = useState(3);
    const handleSwitch = (n: number) => {
        switch (n) {
            case 0:
                return <SketchBST />;
            case 1:
                return <LinkedListSketch />;
            case 2:
                return <StackSketch />;
            case 3:
                return <CircularQueueSketch />;
            case 4:
                return <DoublyLinkedListSketch />;
        }
    };

    const updateCurrentSketch = (value: number) => {
        setCurrentSketch(value);
    };

    return (
        <>
            <div className="flex justify-center">
                <button
                    className="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={() => updateCurrentSketch(0)}
                >
                    Binary Search Tree
                </button>
                <button
                    className="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={() => updateCurrentSketch(1)}
                >
                    Linked List
                </button>
                <button
                    className="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={() => updateCurrentSketch(2)}
                >
                    Stack
                </button>
                <button
                    className="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={() => updateCurrentSketch(3)}
                >
                    Circular Queue
                </button>
                <button
                    className="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={() => updateCurrentSketch(4)}
                >
                    Doubly Linked List
                </button>
            </div>
            {handleSwitch(currentSketch)}
        </>
    );
};

export default App;
