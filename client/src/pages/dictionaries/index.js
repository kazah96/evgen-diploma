import React, { Component } from 'react'
import DictionariesBlock from '../../blocks/dictionaries';

export default class Dictionaries extends Component {
  componentDidMount() {
    document.title = 'Словари'
  }

  render() {
    return (
      <DictionariesBlock match={this.props.match} />
    )
  }
}
