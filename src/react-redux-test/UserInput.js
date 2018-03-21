import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInput extends Component{
    static propTypes = {
        onAddUser:PropTypes.func
    }

    constructor(){
        super();
        this.state = {
            user:{
                username:"",
                age:0,
                gender:"male"
            }
        }
    }

    handleInputBlur(event){
        let user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({
            user 
        })
    }
    handleInputChange(event){
        let user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({
            user 
        })
    }
    
    render(){
        return (
            <div className='add-user'>          
            <div className="input-info">
              <span className="input-tips">Username:</span> 
              <input type='text' 
                name="username"
                value={this.state.user.username}
                onBlur={this.handleInputBlur.bind(this)}
                onChange={this.handleInputChange.bind(this)} />
            </div>
            <div className="input-info">
                <span className="input-tips"> Age:</span> 
                <input type='number' 
                  name="age"
                  value={this.state.user.age}
                  onBlur={this.handleInputBlur.bind(this)}
                  onChange={this.handleInputChange.bind(this)} />
            </div>
            <div className="input-info">
                <span className="input-tips">Gender:</span> 
                <label>
                  <input type='radio' name='gender'
                    value={this.state.user.gender}
                    onBlur={this.handleInputBlur.bind(this)}
                    onChange={this.handleInputChange.bind(this)} />
                  <span>Male:</span> 
                </label>
                <label>  
                  <input type='radio' name='gender'
                    value={this.state.user.gender}
                    onBlur={this.handleInputBlur.bind(this)}
                    onChange={this.handleInputChange.bind(this)}/>
                    <span>Female:</span> 
                </label>
            </div>
            <button onClick={this.props.onAddUser.bind(this,this.state.user)}>增加</button>
          </div> 
        )
    }
}

export default UserInput;