import React, { Component } from 'react';
import Header from "./containers/Header";
import Content from "./containers/Content";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 使用官方提供的redux中的createStore
// function createStore (reducer) {
//     let state = null
//     const listeners = []
//     const subscribe = (listener) => listeners.push(listener)
//     const getState = () => state
//     const dispatch = (action) => {
//       state = reducer(state, action)
//       listeners.forEach((listener) => listener())
//     }
//     dispatch({}) // 初始化 state
//     return { getState, dispatch, subscribe }
//   }
  
  const themeReducer = (state, action) => {
    if (!state) return {
      themeColor: 'red'
    }
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
  }
  
const store = createStore(themeReducer)

class Index extends Component {
    //把 Provider 作为组件数的根节点
    render(){
        return (
            <Provider store={ store }>
                <div>
                    <Header /> 
                    <Content /> 
                </div>         
            </Provider>
        )
    }

}


export default Index;