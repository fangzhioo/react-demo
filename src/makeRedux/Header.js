import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class Header extends Component {

    static propTypes = {
        themeColor: PropTypes.string
    }

    render () {
        return (
            <h1 style={{ color: this.props.themeColor }}>结合context和store （标题）</h1>
        )
    }
}

// 使用高阶组件传递参数
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateToProps)(Header);


export default Header;