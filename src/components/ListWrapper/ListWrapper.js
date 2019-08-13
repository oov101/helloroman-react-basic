import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss';
import uuidv1 from 'uuid/v1';

const ListWrapper = ({ items }) => (
  <ul className={styles.wrapper}>
    {items.map(item => (
      <ListItem
        key={uuidv1()}
        {...item}
      />
    ))}
  </ul>
);

export default ListWrapper;
