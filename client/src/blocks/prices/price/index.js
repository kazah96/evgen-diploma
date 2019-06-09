import React, { Component } from 'react'
import { connect } from 'react-redux';

import Table from '../../../components/table';


class Price extends Component {
  get noItems() {
    return (
      <div>
        No items
      </div>
    )
  }

  render() {
    const { match: { params }, prices } = this.props;

    const dict = prices[params.name];

    if (dict.items.length <= 0) return this.noItems;

    return (
     <Table schema={dict.schema} items={dict.items}>


     </Table>
    )
  }

}


export default connect((state) => ({
  prices: state.prices,
}))(Price);