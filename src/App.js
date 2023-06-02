import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

function App() {
  const dropdownItems = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Dropdown Component</h1>
        <p className="App-intro">
          This is a simple dropdown component built with React. To use it, simply import the <code>Dropdown</code> component and pass an array of items as props.
        </p>
        <Dropdown items={dropdownItems} />
      </header>
    </div>
  );
}

export default App;
