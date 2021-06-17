import {
  SET_LIST_USER,
  SET_LIST_USER_LOADING,
  SET_LIST_USER_ERROR,
  SET_FILTER_USER,
  SET_USER_PER_PAGE
} from './constanta'

const initialState = {
  userData: [],
  userPerPage: [],
  loading: true,
  error: false
}

function setListUser(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_LIST_USER:
      return { ...state, userData: payload }
    case SET_USER_PER_PAGE:
      return { ...state, userPerPage: payload }
    case SET_FILTER_USER:
      return { ...state, userPerPage: payload }
    case SET_LIST_USER_LOADING:
      return { ...state, loading: payload }
    case SET_LIST_USER_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}

export default setListUser