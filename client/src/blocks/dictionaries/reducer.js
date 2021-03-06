import { handleActions } from 'redux-actions-helper';
import * as actions from './actions';
import data from './data'

const INIT_STATE = {
  ...data
}

export default handleActions({
  [actions.editItems]: (state, action) => {

    const { name, items }  = action.payload;

    const oldDict = state[name];

    return {
      ...state,
      [name]: {
        ...oldDict,
        items
      }
    }
  },
}, INIT_STATE)
