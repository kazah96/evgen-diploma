import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import { history } from '../../store';
import { connect } from 'react-redux';
import { getUser } from '../../blocks/login/actions';

import { loginPage } from '../../consts/routes';

/**
 * Выглядит странно, но так в доках
 * @see https://reacttraining.com/react-router/web/example/auth-workflow
 */

class PrivateRoute extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    canShow: false,
  }

  componentDidMount() {
    const user = window.localStorage.getItem('user');

    if (!user) {
      history.push(loginPage);

      return;
    }

    if (this.props.user) {
      this.setState({ canShow: true })
    }
    else {
      this.props.getUser(user);
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.user !== this.props.user) {
      this.setState({canShow: true})
    }
  }

  render() {
    const { component, currentUser, ...rest } = this.props;
    // Если нет пользователся -> форма аторизации
    // Если есть пользователь, но нет прав -> форма аторизации

    if (this.state.canShow) return (
      <Route component={component} />)

    return null;
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, {getUser})(PrivateRoute);
