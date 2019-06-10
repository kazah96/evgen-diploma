import React, { Component } from 'react'

import BuyList from '../../blocks/buy-list'

export default class BuyPage extends Component {
  componentDidMount() {
    document.title = 'Покупка'
  }

  render() {
    return (
      <div>
        <button>
          Оформить продажу
        </button>

        Список продаж
        
      </div>
    )
  }
}
