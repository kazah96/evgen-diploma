import React, { Component } from 'react'
import { Route, Switch, Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Dictionary from '../../blocks/dictionary'
import { dictionariesPage } from '../../consts/routes';

import style from './style.module.css'

class Dictionaries extends Component {
  render() {

    return (
      <>
        <nav className={style.header}>
          {Object.keys(this.props.dictionaries).map(dictKey => {

            return (
              <Link key={dictKey} to={`${dictionariesPage}/${dictKey}`}>
                {this.props.dictionaries[dictKey].showName}
              </Link>)
          })}
        </nav>
        <Switch>
          <Route path={`${dictionariesPage}/:name`} component={Dictionary} />
        </Switch>
      </>
    )
  }
}


export default connect((state) => ({
  dictionaries: state.dictionaries,
}))(Dictionaries);