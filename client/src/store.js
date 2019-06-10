import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { promiseMiddleware } from 'redux-actions-helper';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import storeProvider from './storeProvider';

import reducer from './reducer'

export const history = createBrowserHistory();
const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk, promiseMiddleware));

const configureStore = (preloadedState) => createStore(
  reducer(history),
  middleware,
);

storeProvider.init(configureStore);

export default storeProvider.getStore();
