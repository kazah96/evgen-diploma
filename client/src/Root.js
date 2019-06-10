import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Router, Redirect } from 'react-router-dom';
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
            {/* <Route path={mainPage} component={Main} /> */}
            <Route path={loginPage} component={LoginPage} />
            <Route
              exact={true} path={'/'} render={() => ( //eslint-disable-line react/jsx-no-bind
                <Redirect to={mainPage} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
