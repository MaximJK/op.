import merge from 'lodash/merge';
import { FETCH_OPS, DELETE_OP, CREATE_OP, PATCH_OP } from '../actions/action_types';


export default (state = {}, action) => {
    const arrayToObject = (array) =>
        array.reduce((obj, item) => {
        obj[item.id] = item
        return obj
   }, {})

    switch (action.type) {
        
        case FETCH_OPS:
            let ops = action.payload
            return  arrayToObject(ops);
        case CREATE_OP:
            let newState2 = merge({}, state)
            newState2[action.payload.id] = action.payload;
            return newState2;
            
        case PATCH_OP:
            let newState3 = merge({}, state);
            let patchedState ={...newState3, [action.payload.id]: action.payload}
            
            return patchedState 
            
            
        case DELETE_OP:
            let newState = merge({}, state);
            
            delete newState[action.payload]
           return newState
        default :
            return state;
    }}
