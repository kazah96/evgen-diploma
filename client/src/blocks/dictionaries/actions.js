import { createAction, createThunkAction } from 'redux-actions-helper';

export const editItems = createAction(
  '@@dicts/EDIT_ITEMS', (name, items) => ( { name, items } )
)
