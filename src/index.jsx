import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import normalize from 'normalize.css';

import styles from './styles/global.css';
import Root from './components/root';

normalize.use();
styles.use();

render(Root);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    render(Root);
  });
}

function render(RootComponent) {
  ReactDOM.render(
    (
      <AppContainer>
        <RootComponent />
      </AppContainer>
    ),
    document.querySelector('#app'),
  );
}
