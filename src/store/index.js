import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import user from './reducer/reducerUser'
import revenue from './reducer/reducerRevenue'

const reducer = combineReducers({
  user,
  revenue
})

const store = createStore(reducer, applyMiddleware(ReduxThunk))

export default store