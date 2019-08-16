import React from 'react';
import AppContext from '../../context';

import List from '../../components/List/List';

const TwittersView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context.twitters} />
    )}
  </AppContext.Consumer>
);

export default TwittersView;