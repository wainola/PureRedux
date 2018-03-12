import {combineReducers, createStore} from 'redux';

const initialState = {
    user:{
        name:"nicolas",
        age:30,
    },
    tweets:[]
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
    return state;
}

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetReducer
})

const store = createStore(reducers);

console.log(store.getState());
store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type:"CHANGE_NAME", payload:"Nicolas Riquelme"});
store.dispatch({type:"CHANGE_AGE", payload:28});
store.dispatch({type:"CHANGE_NAME", payload:"Camilo Riquelme"});