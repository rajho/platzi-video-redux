import React from 'react';
import { render } from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { Map as map} from 'immutable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import reducer from '../reducers/index'
import Home from '../pages/containers/home';

// function logger({ getState, dispatch}){
//   // return (metodo para despachar el siguiente middleware) => {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())      
//       console.log('vamos a enviar esta acción', action)
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }

// const logger = ({ getState, dispatch}) => next => action => {
//   console.log('este es mi viejo estado', getState().toJS())      
//   console.log('vamos a enviar esta acción', action)
//   const value = next(action)
//   console.log('este es mi nuevo estado', getState().toJS())
//   return value
// }

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )    
)

const homeContainer = document.getElementById('home-container')

render( 
  <Provider store={store}>
    <Home />   
  </Provider>
, homeContainer);

// RETO002: X para eliminar Media
// RETO003: Titulos / Autores editables
// RETO004: Agregar nuevo Media
// RETO005: Agregar botones para Buscar, Buscar Async y Agregar
