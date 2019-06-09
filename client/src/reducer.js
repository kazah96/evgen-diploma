import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import dictionaryRouter from './blocks/dictionaries/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  dictionaries: dictionaryRouter
})