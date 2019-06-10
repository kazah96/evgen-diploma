import React, { Component } from 'react'

import BuyList from '../../blocks/buy-list';
import BuyForm from '../../blocks/buy-form';

import style from './style.module.css'

export default class BuyPage extends Component {
  componentDidMount() {
    document.title = 'Покупка'
  }

  render() {
    return (
      <div className={style.content}>
        <BuyForm />
        <div className={style.buyList}>

          <div className={style.label}>
            Список продаж

        </div>

          <BuyList>

          </BuyList>

        </div>


      </div>
    )
  }
}
