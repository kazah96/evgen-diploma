import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dictionary extends Component {

  get dictionaryNames() {
    return Object.keys(this.props.dictionaries);
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

    return (
      <div>
        
      </div>
    )
  }
}


export default connect((state) => ({
  dictionaries: state.dictionaries,
}))(Dictionary);