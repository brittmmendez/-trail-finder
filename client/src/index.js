import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  trails: [{
      id: 1,
      name: "Loveland Bike Trail",
      distance: 3,
      description: "Beautiful trail along river!"
    },{
      id: 2,
      name: "Caesar Creek State Park",
      distance: 5,
      description: "clear blue waters, scattered woodlands, meadows and steep ravines."
    },{
      id: 3,
      name: "Sharon Woods",
      distance: 3,
      description: "Recreation area with paved trails, golf, boating, an indoor playground & a village museum."
    }]
};

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
