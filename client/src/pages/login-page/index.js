import React, { Component } from 'react'

import Login from '../../blocks/login'

export default class LoginPage extends Component {
  componentDidMount() {
    document.title = 'Логин'
  }

  render() {
    return (
      <Login></Login>
    )
  }
}
