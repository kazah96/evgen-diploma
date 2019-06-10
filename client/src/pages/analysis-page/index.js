import React, { Component } from 'react'

import Analysis from '../../blocks/analysis';

export default class AnalysisPage extends Component {
  componentDidMount() {
    document.title = 'Анализ'
  }

  render() {
    return (
      <Analysis>
        Buy
      </Analysis>
    )
  }
}
