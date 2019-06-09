import { handleActions } from 'redux-actions-helper';
import * as actions from './actions';

const INIT_STATE = {
  goods: {
    showName: 'Товары',
    schema: [
      {
        name: 'id',
        type: 'number'
      },
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'shortName',
        type: 'string'
      },
    ],
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
    schema: [
      {
        name: 'name',
        type: 'string'
      }
    ],
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
