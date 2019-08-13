import React, { useState } from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import './index.css';
import { twitterAccounts } from './data/twitterAccounts';

const App = () => {
  const [items, setItems] = useState(twitterAccounts);

  const addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    setItems(prevItems => [...prevItems, newItem]);
  }

  return (
    <>
      <ListWrapper items={items} />
      <Form submitFn={addItem} />
    </>
  );
}

export default App;
