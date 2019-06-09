import React, { Component } from 'react'
import Prices from '../../blocks/prices';

export default class PricePage extends Component {
  componentDidMount() {
    document.title = 'Цены'
  }

  render() {
    return (
      <Prices match={this.props.match} />
    )
  }
}
