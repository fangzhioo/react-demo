/**
 * 高阶组件帮助我们从 context 取数据
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const connect = (mapStateToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    // 响应改变 重新渲染
    constructor() {
      super();
      this.state = { allProps: {} };
    }

    componentWillMount(){
      const { store } = this.context;
      this._updateProps();
      store.subscribe(() => this._updateProps());
    }

    _updateProps(){
      const { store } = this.context;
       // 额外传入 props，让获取数据更加灵活
      let stateProps = mapStateToProps(store.getState(),this.props);     
      this.setState({
        allProps :{  // 整合普通的props 和 从state生成的props 
          ...stateProps,
          ...this.props
        }
      })
    }

    render () {
      // {...this.state.allProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  return Connect
}