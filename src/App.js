import React from 'react';
import './App.css';

import Board from './components/Board';

function App() {
  const tasksBoard1 = [
    {
      id: 1,
      name: "Task 1-1",
      description: "This is task 1"
    },
    {
      id: 2,
      name: "Task 1-2",
      description: "This is task 2"
    },
    {
      id: 3,
      name: "Task 1-3",
      description: "This is task 3"
    },
    {
      id: 4,
      name: "Task 1-4",
      description: "This is task 4"
    },
    {
      id: 5,
      name: "Task 1-5",
      description: "This is task 5"
    }
  ];

  const tasksBoard2 = [
    {
      id: 6,
      name: "Task 1-1",
      description: "This is task 1"
    },
    {
      id: 7,
      name: "Task 1-2",
      description: "This is task 2"
    },
    {
      id: 8,
      name: "Task 1-3",
      description: "This is task 3"
    }
  ];

  return (
    <div className="App">
        <Board tasks={tasksBoard1} title="To do" id="board1"/>
        <Board tasks={tasksBoard2} title="Done" id="board2"/>
    </div>
  );
}

export default App;
