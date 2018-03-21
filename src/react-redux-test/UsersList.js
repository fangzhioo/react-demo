import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class User extends Component {
  static propTypes = {
    user: PropTypes.object,
    index: PropTypes.number,
    onDeleteUser: PropTypes.func
  }

  handleDeleteUser(index){
    // ...

  }

  render () {
    const { user } = this.props
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={this.handleDeleteUser.bind(this,this.props.index)}>删除</button>
      </div>
    )
  }
}

class UsersList extends Component {
  static propTypes = {
    users: PropTypes.array
  }

  constructor(){
    super();
    this.state.user = {
      username:"",
      age:0,
      gender:"male"
    }
  }

  handleDeleteUser(index){
      console.log("删除",index)
  }
  handleAddUser(user){

  }
  handleUsernameBlur(event){
    this.setState({
        user:{...this.state.user,username:event.target.value}
    })
  }
  handleUsernameChange(event){
    this.setState({
        user:{...this.state.user,username:event.target.value}
    })
  }

  render () {
    return (
        <div>
          {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
          <div className='add-user'>
          
            <div>Username: 
              <input type='text' 
                value={this.state.user.username}
                onBlur={this.handleUsernameBlur.bind(this)}
                onChange={this.handleUsernameChange.bind(this)} />
            </div>
            <div>Age: <input type='number' /></div>
            <div>Gender:
              <label>Male: <input type='radio' name='gender' value='male' /></label>
              <label>Female: <input type='radio' name='gender' value='female' /></label>
            </div>
            <button onClick={this.handleAddUser.bind(this)}>增加</button>
          </div>
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