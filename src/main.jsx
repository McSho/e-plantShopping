import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Ensure Provider is imported
import store from './store';  // Import the store
import App from './App';

ReactDOM.render(
  <Provider store={store}>  {/* Wrap the app with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
