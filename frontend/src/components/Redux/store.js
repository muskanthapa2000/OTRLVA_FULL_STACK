import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import { accountReducer } from './accountReducer';
import { loginReducer } from './loginReducer';


const rootReducer = combineReducers({ accountReducer,loginReducer})


const store = createStore(rootReducer, applyMiddleware(thunk));

export { store }