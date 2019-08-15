import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const ListWrapper = ({ items }) => (
  <ul className={styles.wrapper}>
    {items.map(item => (
      <ListItem
        key={item.key}
        {...item}
      />
    ))}
  </ul>
);

export default ListWrapper;
