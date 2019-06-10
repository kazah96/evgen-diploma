import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Table from '../../components/table';
import { pricePage } from '../../consts/routes';

class BuyList extends Component {

  get noItems() {
    return null;
  }

  render() {

    const { buylist } = this.props;


    if (buylist.items.length <= 0) return this.noItems;

    return (
      <Table schema={buylist.schema} items={buylist.items} editable={false}>


      </Table>
    )
  }
}


export default connect((state) => ({
  buylist: state.buylist.buylist,
}))(BuyList);