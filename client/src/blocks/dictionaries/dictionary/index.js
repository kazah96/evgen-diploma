import React, { Component } from 'react'
import { connect } from 'react-redux';

import Table from '../../../components/table';

import style from './style.module.css';

class Dictionary extends Component {
  get noItems() {
    return (
      <div>
        No items
      </div>
    )
  }

  render() {
    const { match: { params }, dictionaries } = this.props;

    const dict = dictionaries[params.name];

    if (dict.items.length <= 0) return this.noItems;

    return (
     <Table schema={dict.schema} items={dict.items}>


     </Table>
    )
  }

}


export default connect((state) => ({
  dictionaries: state.dictionaries,
}))(Dictionary);