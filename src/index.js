import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers';
import App from './components/App';
import initialState from './initialState';

const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    rootElement
);

