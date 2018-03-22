import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from "./ThemeSwitch";
import {connect} from "react-redux";

/**
 *  这里其实有两种情况 
 *  1、 Content 组件不复用，那么这是一个Smart组件就行了 直接引用已经是Smart组件的ThemeSwitch组件，就像这里 
 *  2、 Content 组件需要复用 ， 那么他需要引用的ThemeSwitch组件必须也要是Dumb组件，
 *      这时候 ThemeSwitch 的数据、onSwitchColor 函数只能通过它的父组件传进来，
 *      而不是通过 connect 获得。所以只能让 Content 组件去 connect，然后让它把数据、函数传给 ThemeSwitch。
 * 
 */
class Content extends Component {
    static propTypes = {
      themeColor: PropTypes.string
    }
  
    render () {
      return (
        <div>
          <p style={{ color: this.props.themeColor }}>这里是一段内容 balabala </p>
          <ThemeSwitch />
        </div>
      )
    }
  }

  // 高阶组件 取出context 
const mapStateToProps = (state)=>{
  return {
    themeColor : state.themeColor
  }
}
Content = connect(mapStateToProps)(Content);

export default Content;