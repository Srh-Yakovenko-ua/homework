import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from 'redux';

const reducers = combineReducers({
    loading: loadingReducer,

})

const store = legacy_createStore(reducers)

export {store}

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
