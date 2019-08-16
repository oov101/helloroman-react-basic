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

const Root = () => {
  const [items, setItems] = useState({
    twitters: [],
    articles: [],
    notes: []
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

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
      <AppContext.Provider value={{ items, addItem }}>
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
