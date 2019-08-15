import React, { useState } from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import './index.css';
import uuidv1 from 'uuid/v1';

const initialState = [
  {
    key: uuidv1(),
    image: 'https://image.flaticon.com/icons/svg/17/17004.svg',
    name: 'Dan Abramov',
    description: 'Working on @reactjs. The demo guy.',
    twitterLink: 'https://twitter.com/dan_abramov',
  },
  {
    key: uuidv1(),
    image: 'https://image.flaticon.com/icons/svg/17/17004.svg',
    name: 'Ryan Florence',
    description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    twitterLink: 'https://twitter.com/ryanflorence',
  },
  {
    key: uuidv1(),
    image: 'https://image.flaticon.com/icons/svg/17/17004.svg',
    name: 'Michael Jackson',
    description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    twitterLink: 'https://twitter.com/mjackson',
  },
  {
    key: uuidv1(),
    image: 'https://image.flaticon.com/icons/svg/17/17004.svg',
    name: 'Kent C. Dodds',
    description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
    twitterLink: 'https://twitter.com/kentcdodds',
  },
];

const App = () => {
  const [items, setItems] = useState(initialState);

  const addItem = (e) => {
    e.preventDefault();

    const newItem = {
      key: uuidv1(),
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    setItems(prevItems => [...prevItems, newItem]);

    e.target.reset();
  }

  return (
    <div>
      <ListWrapper items={items} />
      <Form submitFn={addItem} />
    </div>
  );
}

export default App;
