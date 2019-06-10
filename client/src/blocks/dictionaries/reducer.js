import { handleActions } from 'redux-actions-helper';
import * as actions from './actions';
import data  from './data'



const INIT_STATE = {
  ...data
}

export default handleActions({
}, INIT_STATE)
