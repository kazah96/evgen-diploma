import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addBuy } from '../buy-list/actions';

import style from './style.module.css';

class BuyForm extends Component {

  state = {
    client: '',
    bank: '',
    app: '',
    errors: []
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = () => {
    const { app, bank, client } = this.state;
    const { user } = this.props;
    const date = '10-06-19';
    const errors = [];

    if (client === '') {
      errors.push('client');
    }

    if (app === '') {
      errors.push('app');
    }

    if (errors.length > 0) {
      this.setState({ errors });

      return;
    }

    if (this.state.errors.length > 0) {
      this.setState({ errors: [] });
    }

    const buy = {
      id: 12,
      name: app,
      date,
      client,
      sum: 123123,
      empl: user.name,
      bank
    }

    this.props.addBuy(buy);
  }

  render() {
    const { apps, user, banks } = this.props;
    const { errors } = this.state;

    return (
      <div className={style.form}>
        <div>
          <label className={style.label}>Продавец</label>
          <input defaultValue={user.name} disabled>
          </input>
        </div>
        <div>
          <label className={style.label}>Квартира</label>
          <select name="app" onChange={this.onChange} value={this.state.app}>
            {apps.items.map(item => {
              const name = `${item.name} ${item.area}`;
              return (
                <option key={item.name} value={name}> {name}</option>
              )
            })}
          </select>
        </div>
        <div>
          <label className={style.label}>Банк</label>
          <select name="bank" onChange={this.onChange} value={this.state.bank}>
            {banks.items.map(item => {
              return (
                <option key={item.name} value={item.name}>{item.name}</option>
              )
            })}
          </select>
        </div>
        <div>
          <label className={style.label}>Покупатель</label>
          <input name="client" value={this.state.client} onChange={this.onChange}>
          </input>
        </div>
        <div>
          {errors.length > 0 &&
            <span className={style.errors}>Необходимо заполнить все поля</span>}
        </div>
        <button onClick={this.onSubmit}>
          Оформить продажу
        </button>
      </div>
    )
  }
}


export default connect(state => ({
  apps: state.dictionaries.apps,
  user: state.auth.user,
  banks: state.dictionaries.banks,
}), { addBuy })(BuyForm);