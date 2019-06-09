import React, { Component } from 'react'
import style from './style.module.css'
import { NavLink } from 'react-router-dom';

import {
  dictionariesPage,
  buyPage,
  pricePage,
  analysisPage,

} from '../../consts/routes';

export default class Header extends Component {

  render() {
    return (
      <nav className={style.header}>
        <NavLink activeClassName={style.activeLink} className={style.link} to={dictionariesPage}> Словари</NavLink>
        <NavLink activeClassName={style.activeLink} className={style.link} to={buyPage}> Продажи</NavLink>
        <NavLink activeClassName={style.activeLink} className={style.link} to={pricePage}> Прайсы</NavLink>
        <NavLink activeClassName={style.activeLink} className={style.link} to={analysisPage}> Анализ </NavLink>
      </nav>
    )
  }
}
