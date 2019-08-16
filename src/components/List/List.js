import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = ({ items }) => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map(item => (
          <ListItem
            key={item.key}
            {...item}
          />
        ))}
      </ul>
    ) : (
        <h1 className={styles.noItems}>There's nothing here yet, please add some items! <span role="img" aria-label="heart">❤️</span></h1>
      )}
  </>
);

export default List;
