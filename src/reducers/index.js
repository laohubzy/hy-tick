import { combineReducers } from 'redux'
import userInfo from './userInfo'

const tickStore = combineReducers({
    userInfo
})

export default tickStore