import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 现在 Header 是一个Dumb组件了 不依赖react-redux 
class Header extends Component {

    static propTypes = {
        themeColor: PropTypes.string
    }

    render () {
        return (
            <h1 style={{ color: this.props.themeColor }}>这里是模拟redux 和 react-redux 的功能</h1>
        )
    }
}

export default Header;