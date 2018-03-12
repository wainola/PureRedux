import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import ReducerData from './reducers/reducer-data';
import App from './components/app';

const initialState = {
    user:{
        name:"nicolas",
        age:30,
    },
    tweets:[
        {
            id:1,
            title:"tweet 1"
        },
        {
            id:2,
            title:"tweet 2"
        },
        {
            id:3,
            title:"tweet 3"
        },
        {
            id:4,
            title:"tweet 4"
        },
        {
            id:5,
            title:"tweet 5"
        }
    ]
};

// const reducer = (state, action) => {
//     if(action.type === "INC"){
//         return state+action.payload;
//     }
//     if(action.type ==="DEC"){
//         return state-action.payload;
//     }
//     return state;
// }

const userReducer = (state=initialState.user, action) => {
    switch(action.type){
        case "CHANGE_NAME":
            // returning the state as it is plus the changes
            state = {...state, name:action.payload};
            break;
        case "CHANGE_AGE":
            state = {...state, age:action.payload};
            break;
    }
    // we will always return the state
    return state;
}
const tweetReducer = (state=initialState.tweets, action) => {
    switch(action.type){
        case "ADD_TWEET":
            state = state.concat(action.payload);
            break;
        case "DELETE_TWEET":
            state = state.filter((elemento) => elemento.id !== action.payload.id);
    }
    return state;
}

// CombineReducers can have multiple reducers for data and state
const reducers = combineReducers({
    user:userReducer,
    tweets:tweetReducer,
    data:ReducerData
});

const store = createStore(reducers);
//const createStoreWithMiddleware = applyMiddleware()(createStore);
window.store = store; 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.container')
);

// console.log(store.getState());
// store.subscribe(() => {
//     console.log("store changed", store.getState());
// });

// store.dispatch({type:"CHANGE_NAME", payload:"Nicolas Riquelme"});
// store.dispatch({type:"CHANGE_AGE", payload:28});
// store.dispatch({type:"CHANGE_NAME", payload:"Camilo Riquelme"});
// store.dispatch({type:"CHANGE_AGE", payload:23});
// store.dispatch({type:"ADD_TWEET", payload:{id:6,title:"tweet 6"}});
// store.dispatch({type:"DELETE_TWEET", payload:{id:3}});