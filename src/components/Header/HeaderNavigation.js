import React from 'react';
import styles from './HeaderNavigation.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}><NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/" exact>twitters</NavLink></li>
      <li className={styles.navItem}><NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/articles">articles</NavLink></li>
      <li className={styles.navItem}><NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/notes">notes</NavLink></li>
    </ul>
  </nav>
);

export default HeaderNavigation;