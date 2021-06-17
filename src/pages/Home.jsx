import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import User from '../pages/User'
import ContactUs from '../pages/ContactUs'

export default function Main() {
  const history = useHistory()

  useEffect(() => {
    if(!localStorage.access_token) {
      history.push('/login')
    }
  }, [])

  return (
    <div className="flex h-screen bg-gray-800">
      <Sidebar />
      <div className="flex-1 px-12 py-6">
        <div className="bg-blue-100 h-full w-full rounded-3xl p-10 overflow-auto">
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/users'>
              <User />
            </Route>
            <Route path='/contact-us'>
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
