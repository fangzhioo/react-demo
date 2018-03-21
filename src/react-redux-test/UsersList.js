import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import User from "./User"
import UserInput from "./UserInput"
import "./userslist.css"

class UsersList extends Component {
  static propTypes = {
    users: PropTypes.array
  }

  handleDeleteUser(index){
    // 删除user
    this.props.onDeleteUser && this.props.onDeleteUser(index);
  }
  handleAddUser(user){
    // 新增user
    this.props.onAddUser && this.props.onAddUser(user);
  }

  render () {
    return (
        <div>
          {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
          <UserInput onAddUser={this.handleAddUser.bind(this)} />
          {/* 显示用户列表 */}
          <div className='users-list'>{
            this.props.users && this.props.users.map((value,key) => {
                    return (
                        <User user={value} onDeleteUser={this.handleDeleteUser.bind(this)} key={key} index={key}></User>
                    )
            }) 
          }</div>
        </div>
    )
  }
}
// 使用高阶组件传递参数
const mapStateToProps = (state) => {
  return {
    users:state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (user) => {
      dispatch({
        type: 'ADD_USER',
        user
      })
    },
    onDeleteUser: (index) =>{
      dispatch({
        type: 'DELETE_USER',
        index
      })
      
    }
  }
}
UsersList = connect(mapStateToProps,mapDispatchToProps)(UsersList);

export default UsersList;