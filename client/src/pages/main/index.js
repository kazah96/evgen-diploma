import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from '../../blocks/header';
import Dictionaries from '../dictionaries';

import { dictionariesPage } from '../../consts/routes';

export default class Main extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Switch>
          {/* <PrivateRoute path={mainPage} component={Main} /> */}
          <Route path={dictionariesPage} component={Dictionaries} />
        </Switch>
      </>
    )
  }
}