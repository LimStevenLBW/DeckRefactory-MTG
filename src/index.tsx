import React from 'react';
import ReactDOM from 'react-dom/client'

import { store } from './app/store.ts';
import { Provider } from 'react-redux';

import App from './App.tsx'

//Stylization
import './index.css'
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >,
)
