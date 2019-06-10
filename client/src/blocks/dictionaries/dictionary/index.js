import React, { Component } from 'react'
import { connect } from 'react-redux';

import Table from '../../../components/table';

import { editItems } from '../actions';
import style from './style.module.css';

class Dictionary extends Component {
  get noItems() {
    return (
      <div>
        No items
      </div>
    )
  }

  saveItems = (items) => {
    const { match: { params } } = this.props;

    this.props.editItems(params.name, items);
  }

  render() {
    const { match: { params }, dictionaries } = this.props;

    const dict = dictionaries[params.name];

    if (dict.items.length <= 0) return this.noItems;

    return (
      <Table schema={dict.schema} saveItems={this.saveItems} items={dict.items}>
      </Table>
    )
  }

}


export default connect((state) => ({
  dictionaries: state.dictionaries,
}), { editItems })(Dictionary);