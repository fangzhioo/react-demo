import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = [
  {route:"/commentapp",alias:"commentapp - 状态提升版"},
  {route:"/commentapp2",alias:"commentapp - react-redux版"},
  {route:"/react-redux-test",alias:"react-redux-test"},
  {route:"/react-redux-userlist",alias:"react-redux-example-用户列表"},
]
const links4params = [
  {route:"/react-router-test",alias:"react-router-test",params:{id:'Iamparam'}}
]
class Nav extends Component{
  render() {
    return (
      <div>
        <h1>React Demo</h1>
        <ul>     
          {
            links.map((item)=>{
              return (
                <li key={item.alias}><Link to={item.route}>{item.alias}</Link></li>
              )
            })
          } 
          {
            links4params.map((item)=>{
              return (
                <li key={item.alias}><Link to={`${item.route}/${item.params.id}`}>{item.alias}</Link></li>
              )
            })
          }
        </ul>
        <div className='line'></div>
         {/* add this */}
        {this.props.children}
      </div>
    )
  }
}
export default Nav;