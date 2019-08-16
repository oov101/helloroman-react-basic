import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../index.css';
import uuidv1 from 'uuid/v1';

import ArticlesView from '../ArticlesView/ArticlesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';

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

const Root = () => {
  const [items, setItems] = useState(initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <Header openModalFn={openModal} />
      <Switch>
        <Route exact path="/" component={TwittersView} />
        <Route path="/articles" component={ArticlesView} />
        <Route path="/notes" component={NotesView} />
      </Switch>
      {isModalOpen && <Modal closeModalFn={closeModal} />}
    </BrowserRouter>
  );
}

export default Root;
