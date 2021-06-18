import {
  SET_LIST_USER,
  SET_LIST_USER_ERROR,
  SET_LIST_USER_LOADING,
  SET_FILTER_USER,
  SET_USER_PER_PAGE,
  SET_REVENUE,
  SET_REVENUE_LOADING,
  SET_REVENUE_ERROR
} from './constanta'
import axios from 'axios'

//User
export function fetchUser(firstIndexPage, lastIndexPage) {
  return function(dispatch) {
    axios({
      method: 'GET',
      url: `https://60cafe0521337e0017e43791.mockapi.io/qlue/users`
    })
      .then(({ data }) => {
        dispatch(setListUser(data))
        dispatch(setUserPerPage(data.slice(firstIndexPage, lastIndexPage)))
      })
      .catch(err => dispatch(setListUserError(err)))
      .finally(() => dispatch(setListUserLoading(false)))
  }
}

export function setListUser(payload) {
  return { type: SET_LIST_USER, payload }
}

export function setUserPerPage(payload) {
  return { type: SET_USER_PER_PAGE, payload }
}

export function setFilterUser(payload) {
  return { type: SET_FILTER_USER, payload }
}

export function setListUserLoading(payload) {
  return { type: SET_LIST_USER_LOADING, payload }
}

export function setListUserError(payload) {
  return { type: SET_LIST_USER_ERROR, payload }
}


//Revenue
export function setRevenue(payload) {
  return { type: SET_REVENUE, payload }
}

export function setRevenueLoading(payload) {
  return { type: SET_REVENUE_LOADING, payload }
}

export function setRevenueError(payload) {
  return { type: SET_REVENUE_ERROR, payload }
}


export function fetchRevenue() {
  return function(dispatch) {
    axios({
      method: 'GET',
      url: `https://60cafe0521337e0017e43791.mockapi.io/qlue/revenue`
    })
    .then(({ data }) => {
      dispatch(setRevenue(data))
    })
    .catch(err => dispatch(setRevenueError(err)))
    .finally(() => dispatch(setRevenueLoading(false)))
  }
}