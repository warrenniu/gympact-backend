import { combineReducers} from 'redux';

const defaultState = {
    user: null,
}

function setUser(state = defaultState.user, action){
    switch(action.type){
        case "SET_USER":
            return action.payload;
            default:
                return state
    }
}

const rootReducer = combineReducers({
    user: setUser
});

export default rootReducer;