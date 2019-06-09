import React, { Component } from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom';

import { dictionariesPage } from '../../consts/routes';

export default class Header extends Component {

  render() {
    return (
      <div className={style.header}>
        Header
        <nav>
          <Link className={style.author} to={dictionariesPage}> sfsdf</Link>
        </nav>
      </div>
    )
  }
}
