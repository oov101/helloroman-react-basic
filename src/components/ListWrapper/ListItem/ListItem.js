import React from 'react';
import './ListItem.css';
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
  <li className="listItem__wrapper">
    <img className="listItem__image" src={danAbramovImage} alt="Dan Abramov" />
    <div>
      <h2 className="listItem__name">Dan Abramov</h2>
      <p className="listItem__description">
        Working on @reactjs. The demo guy.
      </p>
      <button className="listItem__button">visit twitter page</button>
    </div>
  </li>
);

export default ListItem;
