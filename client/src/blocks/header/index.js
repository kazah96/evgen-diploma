import React, { Component } from 'react'
import style from './style.module.css'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../../store';
import {logout} from '../../blocks/login/actions';

import {
  dictionariesPage,
  buyPage,
  pricePage,
  analysisPage,
  homePage
} from '../../consts/routes';


class Header extends Component {

  logout = () => {
    this.props.logout();
    history.push('/');
  }

  render() {
    return (
      <nav className={style.header}>
        <NavLink activeClassName={style.activeLink} className={style.link} to={homePage}>Главная</NavLink>
        <NavLink activeClassName={style.activeLink} className={style.link} to={dictionariesPage}> Словари</NavLink>
        <NavLink activeClassName={style.activeLink} className={style.link} to={buyPage}> Продажи</NavLink>
        <NavLink activeClassName={style.activeLink} className={style.link} to={pricePage}> Прайсы</NavLink>
        <NavLink activeClassName={style.activeLink} className={style.link} to={analysisPage}> Анализ </NavLink>

        <div className={style.profile}>
          <div className={style.name}>
            {this.props.user.name} | <span className={style.exit} onClick={this.logout}>Выйти</span>
          </div>
          <div className={style.ava}>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(state => ({user: state.auth.user}), {logout})(Header)