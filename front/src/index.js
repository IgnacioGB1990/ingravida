import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./redux/store"

import './index.css';
import App from './App';

// import Bootstrap from "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  //Provider: component that will act is the parent of the whole App 
  //that will have access to the store.
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


