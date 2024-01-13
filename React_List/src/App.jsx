// src/App.js
import React, { useState } from 'react';
import List from './List';

const App = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>React List Example</h1>
      <button onClick={addItem}>Add Item</button>
      <List items={items} />
    </div>
  );
};

export default App;
