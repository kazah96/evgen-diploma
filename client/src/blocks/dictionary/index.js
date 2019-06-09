import React, { Component } from 'react'
import { connect } from 'react-redux';

import style from './style.module.css';

class Dictionary extends Component {

  get dictionaryNames() {
    return Object.keys(this.props.dictionaries);
  }

  getColumns = row => {
    return Object.keys(row);
  }

  get noItems() {
    return (
      <div>
        No items
      </div>
    )
  }

  get table() {
    const { match: { params }, dictionaries } = this.props;

    const items = dictionaries[params.name].items;

    if (items.length <= 0) return this.noItems;

    return (
      <div>

        <table className={style.table}>
          <thead>
            <tr className={style.header}>
              {this.getColumns(items[0]).map(column => (
                <th key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((row, id) => {
              return (
                <tr key={`${id}${Math.random()}`}>
                  {this.getColumns(row).map(column => (
                    <td key={column}>
                      <input className={style.input} defaultValue={row[column]} />
                    </td>))
                  }
                </tr>)
            })}
          </tbody>
        </table>
        <div>
          Add
        </div>
      </div>
    )
  }

  render() {
    const { match: { params } } = this.props;

    if (!this.dictionaryNames.some(name => params.name === name)) {
      return (
        <div>
          Such dict not found;
        </div>
      )
    }

    return this.table
  }
}


export default connect((state) => ({
  dictionaries: state.dictionaries,
}))(Dictionary);