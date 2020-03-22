import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  credentials: 'same-origin'
});

import AppNavigator from './navigator/AppNavigator';

const initialState = {
  action: '',
  name: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_MENU':
      return { action: 'closeMenu' };
    case 'OPEN_MENU':
      return { action: 'openMenu' };
    case 'UPDATE_NAME':
      return { ...state, name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
