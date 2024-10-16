import {BUG_ADDED,BUG_REMOVED,BUG_RESOLVED} from "./actionTypes.js";

const bugAdded = description => ({
    type:BUG_ADDED,
    payload:{
        description:description
    }
})

const bugRemoved = id => ({
    type: BUG_REMOVED,
    payload:{
        id:id
    }
})

const bugResolved = id => ({
    type: BUG_RESOLVED,
    payload:{
        id:id,
        resolved:true
    }
})

export {bugAdded,bugRemoved,bugResolved};