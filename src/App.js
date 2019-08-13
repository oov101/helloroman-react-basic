import React, { useState } from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import './index.css';
import { twitterAccounts } from './data/twitterAccounts';

const App = () => {
  const [items, setItems] = useState(twitterAccounts);

  const addItem = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <ListWrapper items={items} />
      <Form submitFn={addItem} />
    </>
  );
}

export default App;
