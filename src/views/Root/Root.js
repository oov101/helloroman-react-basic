import React, { useState } from 'react';
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../index.css';
import uuidv1 from 'uuid/v1';

import ArticlesView from '../ArticlesView/ArticlesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';

const initialTwittersState = [
  {
    key: uuidv1(),
    type: 'twitter',
    image: 'https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_400x400.png',
    title: 'Dan Abramov',
    description: 'Working on @reactjs. The demo guy.',
    link: 'https://twitter.com/dan_abramov',
  },
  {
    key: uuidv1(),
    type: 'twitter',
    image: 'https://pbs.twimg.com/profile_images/1030536508321591296/pTLoN1_y_400x400.jpg',
    title: 'Ryan Florence',
    description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    link: 'https://twitter.com/ryanflorence',
  },
  {
    key: uuidv1(),
    type: 'twitter',
    image: 'https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg',
    title: 'Michael Jackson',
    description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    link: 'https://twitter.com/mjackson',
  },
  {
    key: uuidv1(),
    type: 'twitter',
    image: 'https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg',
    title: 'Kent C. Dodds',
    description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
    link: 'https://twitter.com/kentcdodds',
  }
];

const Root = () => {
  const [twitters, setTwitters] = useState(initialTwittersState);
  const [articles, setArticles] = useState([]);
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      key: uuidv1(),
      type: item.type,
      title: item.title,
      link: item.link,
      image: item.image,
      description: item.description
    };

    switch (item.type) {
      case 'twitter':
        setTwitters(prevTwitters => [...prevTwitters, newItem]);
        break;
      case 'article':
        setArticles(prevArticles => [...prevArticles, newItem]);
        break;
      case 'note':
        setNotes(prevNotes => [...prevNotes, newItem]);
        break;
      default:
        console.error(`There is not type of ${item.type}!`);
    }

    closeModal();
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ twitters, articles, notes, addItem }}>
        <Header openModalFn={openModal} />
        <Switch>
          <Route exact path="/" component={TwittersView} />
          <Route path="/articles" component={ArticlesView} />
          <Route path="/notes" component={NotesView} />
        </Switch>
        {isModalOpen && <Modal closeModalFn={closeModal} />}
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default Root;
