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
    saveItems: PropTypes.func,
    editable: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    saveItems: () => null,
    editable: true,
  }

  componentDidMount() {
    this.fillTable();
  }

  fillTable = () => {
    const { items, schema } = this.props;

    this.setState({ items, schema });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items || prevProps.schema !== this.props.schema) {
      this.fillTable();
    }
  }


  get dictionaryNames() {
    return Object.keys(this.props.dictionaries);
  }

  getRowFromSchema = (schema) => {
    return schema.reduce((acc, cur) => {

      return {
        ...acc,
        [cur.name]: '',
      }
    }, {})
  }

  getAvaliableId = () => {
    const ids = this.state.items.map(items => items.id).sort();

    return ids[ids.length - 1] + 1;
  }

  saveItems = () => {
    const { saveItems } = this.props;
    saveItems(this.state.items);
  }


  addRow = () => {
    const items = [...this.state.items];

    const row = this.getRowFromSchema(this.state.schema);
    row.id = this.getAvaliableId();

    items.push(row);

    this.setState({ items });
  }

  getColumns = row => {
    return Object.keys(row);
  }

  onCellChange = (e) => {
    const { value, name, id } = e.target;

    const items = [...this.state.items];

    const idx = items.findIndex(item => parseInt(item.id) === parseInt(id));
    if (idx < 0) return;

    items[idx][name] = value;

    this.setState({ items });
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
    if (!items || items.length <= 0) return this.noItems('No items provided');

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
                <tr key={`${row.id}`}>
                  {schema.map(column => (
                    <td
                      key={`${row.id}${column.name}`}
                    >
                      {this.props.editable ? <input
                        name={column.name}
                        id={row.id}
                        onChange={this.onCellChange}
                        className={style.input}
                        value={row[column.name]}
                      /> : <input
                          id={row.id}
                          className={style.input}
                          defaultValue={row[column.name]}
                          disabled
                        />}
                    </td>))
                  }
                </tr>)
            })}
          </tbody>
        </table>
        {this.props.editable &&
          <div>
            <button className={style.addButton} onClick={this.addRow}>
              Добавить
          </button>
            <button className={style.saveButton} onClick={this.saveItems}>
              Сохранить
          </button>
          </div>
        }
      </div>
    )
  }

  render() {
    return this.table
  }
}


export default Dictionary;