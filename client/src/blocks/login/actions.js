import { createAction, createThunkAction } from 'redux-actions-helper';
import users from './users'

export const login = createThunkAction(
  '@@auth/LOGIN', ({ dispatch }, name, pass) => {
    const user = users.find(item => item.login === name && item.password === pass);

    if (!user) {
      dispatch(setError('Неверный пароль или логин'));

      return;
    }

    window.localStorage.setItem('user', user.id);
    dispatch(setUser(user));
  });

export const getUser = createThunkAction(
  '@@auth/LOGIN', ({ dispatch }, id) => {
    const user = users.find(item => item.id === id);

    if (user) {
      dispatch(setUser(user));
    }
  });

export const setError = createAction(
  '@@auth/SET_ERROR', (error) => ( error )
)

export const setUser = createAction(
  '@@auth/SET_USER', (user) => user
)

export const logout = createAction(
  '@@auth/LOGOUT', () => {
    window.localStorage.removeItem('user');
  }
);