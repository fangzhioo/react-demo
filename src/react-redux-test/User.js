import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    static propTypes = {
      user: PropTypes.object,
      index: PropTypes.number,
      onDeleteUser: PropTypes.func
    }
  
    render () {
      const { user } = this.props
      return (
        <div className="user-item">
          <div className="user-username">Name: {user.username}</div>
          <div className="user-age">Age: {user.age}</div>
          <div className="user-age">Gender: {user.gender}</div>
          <button onClick={this.props.onDeleteUser && this.props.onDeleteUser.bind(this,this.props.index)}>删除</button>
        </div>
      )
    }
  }

  export default User;