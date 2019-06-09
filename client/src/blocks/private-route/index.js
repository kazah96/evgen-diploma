import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import { history } from '../../store';

import { loginPage } from '../../consts/routes';

/**
 * Выглядит странно, но так в доках
 * @see https://reacttraining.com/react-router/web/example/auth-workflow
 */

class PrivateRoute extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };


  componentDidMount() {
    const user = window.localStorage.getItem('user');

    if(!user) {
      history.push(loginPage);

      return;
    }
  }

  render() {
    const { component, currentUser, ...rest } = this.props;
    // Если нет пользователся -> форма аторизации
    // Если есть пользователь, но нет прав -> форма аторизации

    return (
      <Route component={component}/>)
  }
}

export default PrivateRoute

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.session.currentUser,
//   }
// }

// export default connect(mapStateToProps, userActions)(PrivateRoute);
