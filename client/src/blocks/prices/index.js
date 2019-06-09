import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Price from './price';
import { pricePage } from '../../consts/routes';
import { history } from '../../store';

import style from './style.module.css'

class Dictionaries extends Component {
  componentDidMount() {
    const { match: { params }, prices } = this.props;

    if (!params.name) {
      const dicts = Object.keys(prices);

      if (dicts.length > 0) {
        history.push(`${pricePage}/${dicts[0]}`)
      }
    }
  }

  render() {

    const { prices } = this.props;

    return (
      <React.Fragment>
        <nav className={style.header}>
          {Object.keys(prices).map(price => {
            return (
              <NavLink
                className={style.navLink}
                key={price}
                to={`${pricePage}/${price}`}
                activeClassName={style.activeNavLink}
              >
                {prices[price].showName}
              </NavLink>)
          })}
        </nav>
        <div className={style.content}>
          <Switch>
            <Route path={`${pricePage}/:name`} component={Price} />
          </Switch>

        </div>
      </React.Fragment>
    )
  }
}


export default connect((state) => ({
  prices: state.prices,
}))(Dictionaries);