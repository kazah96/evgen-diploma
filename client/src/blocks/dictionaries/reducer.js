import { handleActions } from 'redux-actions-helper';
import * as actions from './actions';

const INIT_STATE = {
  goods: {
    showName: 'Товары',
    items: [
      {
        name: 'Tovar 1',
      }
    ]
  },

}

export default handleActions({
}, INIT_STATE)
