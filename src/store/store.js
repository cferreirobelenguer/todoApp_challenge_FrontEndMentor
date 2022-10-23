
//Store

import useReducer from '../store/reducer'
import { createStore } from 'redux'

const store=createStore(useReducer);
console.log(store.getState());

export default store;