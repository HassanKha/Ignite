import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {compose, applyMiddleware , createStore} from "redux";
import rootReducer from './Reducers';
import {Provider} from "react-redux"
import thunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const Store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));




ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

