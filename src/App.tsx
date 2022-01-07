import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoInput from './components/Todo/TodoInput';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <hr />
      <h1>To Do App</h1>
      <Todo/>
    </div>
  );
}

export default App;
