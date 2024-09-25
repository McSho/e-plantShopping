import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import store from './store';  // Import the Redux store
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>  {/* Wrap the app with Provider and pass the store */}
    <App />
  </Provider>,
  document.getElementById('root')
);
