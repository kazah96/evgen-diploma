import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from '../../blocks/header';
import Dictionaries from '../dictionaries';
import BuyPage from '../buy-page';

// import style from './style.module.css'

import { dictionariesPage, buyPage } from '../../consts/routes';

export default class Main extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Switch>
          {/* <PrivateRoute path={mainPage} component={Main} /> */}
          <Route path={`${dictionariesPage}/:name`} component={Dictionaries} />
          <Route path={`${dictionariesPage}`} component={Dictionaries} />
          <Route path={buyPage} component={BuyPage} />
        </Switch>
      </>
    )
  }
}