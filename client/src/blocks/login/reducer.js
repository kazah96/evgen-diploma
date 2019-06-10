import { handleActions } from 'redux-actions-helper';
import * as actions from './actions';

const INIT_STATE = {
  user: null,
  error: null
};

export default handleActions({
  [actions.setUser]: (state, action) => {
    return {
      ...state,
      user: action.payload,
      error: null
    }
  },
  [actions.setError]: (state, action) => {
    return {
      ...state,
      error: action.payload
    }
  },
}, INIT_STATE)