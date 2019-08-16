import React from 'react';
import styles from './Header.module.scss';

import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';

import logoImage from '../../assets/logo.svg';

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <img src={logoImage} className={styles.logo} alt="Logo text: FavNote." />
    <HeaderNavigation />
    <Button onClick={openModalFn} secondary>new item</Button>
  </header>
);

export default Header;