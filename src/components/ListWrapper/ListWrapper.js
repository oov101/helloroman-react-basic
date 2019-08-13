import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';
import uuidv1 from 'uuid/v1';

const ListWrapper = () => (
  <ul className="listWrapper__wrapper">
    {twitterAccounts.map(item => (
      <ListItem
        key={uuidv1()}
        name={item.name}
        description={item.description}
        image={item.image}
        link={item.twitterLink}
      />
    ))}
  </ul>
);

export default ListWrapper;
