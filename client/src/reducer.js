import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import dictionaryRouter from './blocks/dictionaries/reducer';
import priceReducer from './blocks/prices/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  dictionaries: dictionaryRouter,
  prices: priceReducer
})