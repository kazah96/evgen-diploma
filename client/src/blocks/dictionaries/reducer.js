import { handleActions } from 'redux-actions-helper';
import * as actions from './actions';

const INIT_STATE = {
  goods: {
    showName: 'Товары',
    items: [
      {
        id: 23,
        name: 'Tovar 1',
        shortName: 'tvr 2',
      },
      {
        id: 24,
        name: 'Tovar 1',
        shortName: 'tvr 2',
      },
      {
        id: 25,
        name: 'Tovar 1',
        shortName: 'tvr 2',
      },
      {
        id: 278,
        name: 'Tovar 1',
        shortName: 'tvr 2',
      },
      {
        id: 223,
        name: 'Tovar 1',
        shortName: 'tvr 2',
      },
    ]
  },
  persons: {
    showName: 'Персоны',
    items: [
      {
        name: 'Персона 1',
        shortName: 'tvr 2',
      }
    ]
  },

}

export default handleActions({
}, INIT_STATE)
