import React from 'react';
import AppContext from '../../context';

const ArticlesView = () => (
  <AppContext.Consumer>
    {(context) => (
      <p>This is Articles View</p>
    )}
  </AppContext.Consumer>
);

export default ArticlesView;