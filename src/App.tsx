import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoInput from './components/Todo/TodoInput';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo/>
    </div>
  );
}

export default App;
