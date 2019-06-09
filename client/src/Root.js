import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import LoginPage from './pages/login-page';
import Main from './pages/main'
import NotFound from './pages/not-found'

import PrivateRoute from './blocks/private-route';
import store, { history } from './store';
import { mainPage, loginPage } from './consts/routes'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <PrivateRoute path={mainPage} component={Main} />
              <Route component={NotFound} />
              <Route path={loginPage} component={LoginPage} />
            </Switch>
          </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
