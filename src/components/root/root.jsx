import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import configureStore from 'configureStore';
import LoginScreen from 'components/loginScreen';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  </Provider>
);

export default Root;
