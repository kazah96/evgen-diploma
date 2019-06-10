import { handleActions } from 'redux-actions-helper';
import * as actions from './actions';
import data from './data'

const INIT_STATE = {
  ...data
}

export default handleActions({
  [actions.addBuy]: (state, action) => {
    const oldBuyList = state.buylist;

    return {
      ...state,
      buylist: {
        ...oldBuyList,
        items: [
          ...oldBuyList.items,
          action.payload
        ]
      }
    }
  }
}, INIT_STATE)
