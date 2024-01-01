import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { donationReducer } from './donation/reducers/donation';

const myDonation = createStore(donationReducer);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store  ={myDonation}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
