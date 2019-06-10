import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import dictionaryRouter from './blocks/dictionaries/reducer';
import priceReducer from './blocks/prices/reducer';
import authReducer from './blocks/login/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  dictionaries: dictionaryRouter,
  prices: priceReducer,
  auth: authReducer,
})