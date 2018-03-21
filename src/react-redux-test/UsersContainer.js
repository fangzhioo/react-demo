import React, { Component } from 'react';
import { Provider } from 'react-redux';
import UsersList from "./UsersList";
import { createStore } from 'redux';

const usersReducer = (state, action) => {
    if(!state) {
        return [];
    }
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user];
        case 'DELETE_USER':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'UPDATE_USER':
            return [...state.map((value,key) => {
                if(key === action.index){
                    return {...value, ...action.user}
                }else {
                    return value;
                }
            })];
        default:
            return state;
    }
};
const store = createStore(usersReducer);

class UserContainer extends Component {
    render(){
        return (
            <Provider  store={ store } >
                <UsersList />
            </Provider>
        )
    }

}

export default UserContainer;