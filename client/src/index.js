import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';                                         //react component - kind of like the glue for react and redux
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';                                                //middleware for redux allows us to directly access dispatch in our actions to make async calls
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const middleware = [thunk];
let store = createStore(rootReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),    //creates our store with rootReducer, preloaded state, and enhancers like chrome extension
  applyMiddleware(...middleware)
);


ReactDOM.render(
  <Provider store={store} >                                               
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
