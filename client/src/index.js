import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
