import store from "./store.js";
import {bugAdded,bugRemoved,bugResolved} from "./actions.js";
const unsubscribe = store.subscribe(()=>{
    console.log('Store changed',store.getState());
})
store.dispatch(bugAdded("Bug 1"))
store.dispatch(bugResolved(1))

unsubscribe();
// store.dispatch(bugRemoved(1))