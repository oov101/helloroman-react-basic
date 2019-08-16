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
  const [twitters, setTwitters] = useState([]);
  const [articles, setArticles] = useState([]);
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

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
