import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Dictionary from '../../blocks/dictionary'
import { dictionariesPage } from '../../consts/routes';
import { history } from '../../store';

import style from './style.module.css'

class Dictionaries extends Component {
  componentDidMount() {
    const { match: { params }, dictionaries } = this.props;

    if (!params.name) {
      const dicts = Object.keys(dictionaries);
      if (dicts.length > 0) {
        history.push(`${dictionariesPage}/${dicts[0]}`)
      }
    }
  }

  render() {

    const { dictionaries } = this.props;

    return (
      <React.Fragment>
        <nav className={style.header}>
          {Object.keys(dictionaries).map(dictKey => {
            return (
              <NavLink
                className={style.navLink}
                key={dictKey}
                to={`${dictionariesPage}/${dictKey}`}
                activeClassName={style.activeNavLink}
              >
                {dictionaries[dictKey].showName}
              </NavLink>)
          })}
        </nav>
        <div className={style.content}>
          <Switch>
            <Route path={`${dictionariesPage}/:name`} component={Dictionary} />
          </Switch>

        </div>
      </React.Fragment>
    )
  }
}


export default connect((state) => ({
  dictionaries: state.dictionaries,
}))(Dictionaries);