import React, { useState } from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import { twitterAccounts } from './data/twitterAccounts';

const App = () => {
  const [items, setItems] = useState(twitterAccounts);

  return (
    <>
      <ListWrapper items={items} />
    </>
  );
}

export default App;
