import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import uuidv1 from 'uuid/v1';

const ListWrapper = ({ items }) => (
  <ul className="listWrapper__wrapper">
    {items.map(item => (
      <ListItem
        key={uuidv1()}
        {...item}
      />
    ))}
  </ul>
);

export default ListWrapper;
