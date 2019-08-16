import React, { useState } from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './FormRadio';

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note',
};

const descriptions = {
  twitter: 'favorite Twitter account',
  article: 'Article',
  note: 'Note',
};

const Form = () => {
  const [type, setType] = useState(types.twitter);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'link':
        setLink(e.target.value);
        break;
      case 'image':
        setImage(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      default:
        console.error(e.target.name);
        console.error('There is not handler for ' + e.target.name + ' input.')
        break;
    }
  };

  const handleRadioButtonChange = type => {
    setType(type);
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <Title>Add new {descriptions[type]}</Title>
          <form
            autoComplete="off"
            className={styles.form}
            onSubmit={e => context.addItem(e, { type, title, link, image, description })}
          >
            <div className={styles.formOptions}>
              <Radio
                id={types.twitter}
                checked={type === types.twitter}
                changeFn={() => handleRadioButtonChange(types.twitter)}
              >
                Twitter
                </Radio>
              <Radio
                id={types.article}
                checked={type === types.article}
                changeFn={() => handleRadioButtonChange(types.article)}
              >
                Article
                </Radio>
              <Radio
                id={types.note}
                checked={type === types.note}
                changeFn={() => handleRadioButtonChange(types.note)}
              >
                Note
                </Radio>
            </div>
            <Input
              onChange={handleInputChange}
              value={title}
              name="title"
              label={type === types.twitter ? 'Twitter Name' : 'Title'}
              maxLength={30}
            />
            {type !== types.note ? (
              <Input
                onChange={handleInputChange}
                value={link}
                name="link"
                label={type === types.twitter ? 'Twitter Link' : 'Link'}
              />
            ) : null}

            {type === types.twitter ? (
              <Input
                onChange={handleInputChange}
                value={image}
                name="image"
                label="Image"
              />
            ) : null}
            <Input
              onChange={handleInputChange}
              value={description}
              tag="textarea"
              name="description"
              label="Description"
            />
            <Button>add new item</Button>
          </form>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Form;
