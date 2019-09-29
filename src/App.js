import React from 'react';
import { Router } from 'react-router-dom';

import './config/Reactotron';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
