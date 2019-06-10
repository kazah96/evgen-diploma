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
        id: 1,
        name: 'Двухкомнатная',
        price: 123124
      },
      {
        id: 2,
        name: 'Однокомнатная',
        price: 231111
      },
      {
        id: 3,
        name: 'Однокомнатная',
        price: 55555512
      },
      {
        id: 4,
        name: 'Место в общежитии',
        price: 1231241
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
    items: [

    ],
  }

}

export default handleActions({
}, INIT_STATE)
