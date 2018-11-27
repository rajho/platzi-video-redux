import data from './data.js'
import modal from './modal.js'
import { combineReducers } from 'redux-immutable'

import isLoading from './is-loading.js';

const rootReducer = combineReducers({
  data,
  modal,
  isLoading
})

export default rootReducer