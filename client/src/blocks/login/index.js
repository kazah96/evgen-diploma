import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from './actions';
import style from './style.module.css'
import {history} from '../../store';

import { bindActionCreators } from 'redux';

class Login extends Component {
  static propTypes = {
  }

  state = {
    name: '',
    password: '',
  }

  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  login = () => {
    const { name, password } = this.state;

    this.props.actions.login(name, password);
    history.push('/');
  }

  render() {
    return (
      <div className={style.loginForm}>
        <div className={style.par}>
          <label className={style.label}>
            Имя
          </label>
          <input name="name" value={this.state.name} onChange={this.onChange} className={style.input}>
          </input>
        </div>
        <div className={style.par}>
          <label className={style.label}>
            Пароль
          </label>
          <input type="password" name="password" value={this.state.password} onChange={this.onChange} className={style.input}>
          </input>
        </div>
        {this.props.error && (
          <div className={style.error}>
            {this.props.error}
          </div>)
        }
        <button onClick={this.login} className={style.button}>
          Войти
        </button>
      </div>
    )
  }
}


export default connect(state => ({ error: state.auth.error }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  }))(Login)