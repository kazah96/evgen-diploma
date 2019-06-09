import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './style.module.css';

class Dictionary extends Component {
  state = {
    shape: [],
    items: []
  }

  static propTypes = {
    schema: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      showName: PropTypes.string,
      width: PropTypes.number,
    })),
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })),
  }

  componentDidMount() {
   this.fillTable();
  }

  fillTable = () => {
    const { items, schema  } = this.props;

    this.setState({ items, schema });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.items !== this.props.items || prevProps.schema !== this.props.schema) {
      this.fillTable();
    }
  }


  get dictionaryNames() {
    return Object.keys(this.props.dictionaries);
  }

  getColumns = row => {
    return Object.keys(row);
  }

  noItems(mess) {
    return (
      <div>
        {mess}
      </div>
    )
  }

  get table() {
    const { items, schema } = this.state;

    if (!schema || schema.length <= 0) return this.noItems('No shema provided');
    if (!items || items.length <= 0) return  this.noItems('No items provided');

    return (
      <div>
        <table className={style.table}>
          <thead>
            <tr className={style.header} >
              {schema.map(column => (
                <th key={column.name}>
                  {column.showName || column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((row) => {
              return (
                <tr key={`${row.id}${Math.random()}`}>
                  {schema.map(column => (
                    <td key={column.name}>
                      <input className={style.input} defaultValue={row[column.name]} />
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
    return this.table
  }
}


export default Dictionary;