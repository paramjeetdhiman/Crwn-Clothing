import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

/****
 * Provider is component that is the parent of everything inside our application and as the parent it allows the access related to store that we are gonna put all of the actual code in we are gonna store ....
 * Now we have our provider so we actually need to write our store  itself
 *
 *
 *
 */
