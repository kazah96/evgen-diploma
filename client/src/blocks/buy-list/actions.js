import { createAction, createThunkAction } from 'redux-actions-helper';

export const editItems = createAction(
  '@@dicts/EDIT_ITEMS', (name, items) => ( { name, items } )
)

export const addBuy = createAction(
  '@@buy/ADD_BUY', (buy) => buy
)