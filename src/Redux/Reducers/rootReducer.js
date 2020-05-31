import {combineReducers} from 'redux'
import {counterReducer} from "./counterReducer"
import {ProductReducer} from "./productReducer"

const rootReducer = combineReducers({
    counterReducer,
    ProductReducer
})

export {rootReducer};