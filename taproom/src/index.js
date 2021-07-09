import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './reducers/tapRoom-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);


  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);


reportWebVitals();
