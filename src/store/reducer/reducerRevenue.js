import {
  SET_REVENUE, 
  SET_REVENUE_ERROR, 
  SET_REVENUE_LOADING
} from '../constanta'

const initialState = {
  revenueData: [],
  loadingRevenue: true,
  errorRevenue: false
}

function setRevenue(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_REVENUE:
      return { ...state, revenueData: payload }
    case SET_REVENUE_LOADING:
      return { ...state, loadingRevenue: payload }
    case SET_REVENUE_ERROR:
      return { ...state, errorRevenue: payload }
    default:
      return state
  }
}

export default setRevenue