import { handleActions } from 'redux-actions-helper';

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
        showName: 'Название',
        type: 'string'
      },
      {
        name: 'price',
        showName: 'Цена',
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
    showName:'Услуги',
    schema: [
      {
        name: 'id',
        type: 'number'
      },
      {
        name: 'name',
        showName: 'Название',
        type: 'string'
      },
      {
        name: 'price',
        showName: 'Цена',
        type: 'string'
      },
    ],
    items: [],
  }

}

export default handleActions({
}, INIT_STATE)
