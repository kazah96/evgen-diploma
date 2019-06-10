import React, { Component } from 'react'
import style from './style.module.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className={style.content}>
        <h1>АИС Учет товаров и услуг</h1>
        <h2>Евгений Сличный 15ИСТ(ба) ОП</h2>
      </div>
    )
  }
}
