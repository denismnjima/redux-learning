import {BUG_ADDED,BUG_REMOVED,BUG_RESOLVED} from "./actionTypes.js";
let lastID = 0;

// This reducer function is a pure function that takes in a state and an action and returns a new state
export function reducer(state=[],action){
    switch(action.type){
        case BUG_ADDED:
            return [ ...state,{
                id: ++lastID,
                description:action.payload.description,
                resolved:false
            }]
        case BUG_REMOVED:
            return state.filter(bug=>action.payload.id !== bug.id)
        case BUG_RESOLVED:
            return state.map(bug=>bug.id == action.payload.id ? {...bug,resolved:action.payload.resolved} : bug)
        
        default:
            return state;
    }
}