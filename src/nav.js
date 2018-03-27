import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = [
  {route:"/commentapp",alias:"commentapp"},
  {route:"/commentapp2",alias:"commentapp2"},
  {route:"/react-redux-test",alias:"react-redux-test"},
  {route:"/react-redux-userlist",alias:"react-redux-userlist"}
]
class Nav extends Component{
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul>     
          {
            links.map((item)=>{
              return (
                <li key={item.alias}><Link to={item.route}>{item.alias}</Link></li>
              )
            })
          } 
        </ul>
         {/* add this */}
        {this.props.children}
      </div>
    )
  }
}
export default Nav;