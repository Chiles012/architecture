/**
 * ! El index del proyecto donde se inicia la renderizacion del proyecto.
 * * Se agrega el provider desde react-redux para que encapsule toda la applicacion.
 * * Se agrega el BrowserRouter para que las rutas esten encapsulando a toda la applicacion.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider 
    store={store}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('body')
);