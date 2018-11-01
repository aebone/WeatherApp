import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // conecta a aplicação a store
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
  , document.querySelector('.container'));
