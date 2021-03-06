import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 现在这里是一个Dumb组件了
class ThemeSwitch extends Component {
    static propsTypes = {
      themeColor: PropTypes.string,
      onSwitchColor: PropTypes.func
    }

    // dispatch action 去改变颜色
    handleSwitchColor (color) {
      if(this.props.onSwitchColor){
        this.props.onSwitchColor(color)
      }
    }
  
    render () {
      return (
        <div>
          <button
            style={{ color: this.props.themeColor }}
            onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
          <button
            style={{ color: this.props.themeColor }}
            onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
        </div>
      )
    }
  }

  export default ThemeSwitch;