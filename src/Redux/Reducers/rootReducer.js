import {combineReducers} from 'redux'
import {ProductReducer} from "./productReducer"
import {CardReducer} from "./cardReducer"

const rootReducer = combineReducers({
    ProductReducer,
    CardReducer
})

export {rootReducer};