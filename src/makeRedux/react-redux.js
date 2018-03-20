import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * 高阶组件（函数） 完成对context的获取 和 整合来自context的数据方式 
 * @param {object} mapStateToProps 获取store的方式  ~ 类似vuex中的mapGetters
 * @param {object} mapDispatchToProps 如何获取、整合状态 ~ 类似vuex中的mapActions
 * 
 * 
 */
export const connect = (mapStateToProps,mapDispatchToProps) => (WrappedComponent) => {
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
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {} ; // 防止 mapStateToProps 没有传入
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {} ; // 防止 mapDispatchToProps 没有传入   
      this.setState({
        allProps :{  // 整合普通的props 和 从state生成的props 以及 dispatch
          ...stateProps,
          ...dispatchProps,
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

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }// 定义一个指定类型的store

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }// 获取context

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}