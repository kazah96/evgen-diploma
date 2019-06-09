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
    ]
  },
  services: {
    name:'services',
    showName:'services',
  }

}

export default handleActions({
}, INIT_STATE)
