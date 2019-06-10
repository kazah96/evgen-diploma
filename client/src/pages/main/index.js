import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../blocks/header';
import Dictionaries from '../dictionaries';
import BuyPage from '../buy-page';
import PricePage from '../price-page';
import HomePage from '../home-page';
import AnalysisPage from '../analysis-page';

// import style from './style.module.css'

import { dictionariesPage, buyPage, pricePage, analysisPage, homePage, mainPage } from '../../consts/routes';

export default class Main extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Switch>
          {/* <PrivateRoute path={mainPage} component={Main} /> */}
          <Route path={`${dictionariesPage}/:name`} component={Dictionaries} />
          <Route path={`${dictionariesPage}`} component={Dictionaries} />
          <Route path={`${pricePage}/:name`} component={PricePage} />
          <Route path={pricePage} component={PricePage} />
          <Route path={analysisPage} component={AnalysisPage} />
          <Route path={buyPage} component={BuyPage} />
          <Route path={homePage} component={HomePage} />
          <Route
              exact={true} path={mainPage} render={() => ( //eslint-disable-line react/jsx-no-bind
                <Redirect to={homePage} />
              )}
            />
        </Switch>
      </>
    )
  }
}