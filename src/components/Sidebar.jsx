import React from 'react'
import Logo from '../assets/img/qlue.png'
import { useHistory, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Sidebar() {
  const navigation = useHistory()
  const location = useLocation()

  const logout = () => {
    localStorage.clear()
    successAlert('See you!')
    navigation.push('/login')
  }

  function successAlert(msg) {
    Swal.fire(
      msg,
      '',
      'success'
    )
  }

    return (
      <div className="h-full space-y-5 justify-between">
        <div className="justify-center flex p-3 mt-12">
          <img src={Logo} className="w-36" alt='qlue' />
        </div>
        <div className="space-y-5">
          <div onClick={() => navigation.push('/')} className={
            location.pathname === "/" ? (
              "text-gray-100 bg-yellow-500 cursor-pointer rounded-r-2xl cursor-500 transition-colors duration-500"
            ) : (
              "text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500"
            )
          }>
            <div className="flex space-x-3 p-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <p className="font-semibold text-xl">Dashboard</p>
            </div>
          </div>
          <div onClick={() => navigation.push('/users')} className={
            location.pathname === "/users" ? (
              "text-gray-100 bg-yellow-500 cursor-pointer rounded-r-2xl cursor-500 transition-colors duration-500"
            ) : (
              "text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500"
            )
          }>
            <div className="flex space-x-3 p-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="font-semibold text-xl">Users</p>
            </div>
          </div>
          <div onClick={() => navigation.push('/contact-us')} className={
            location.pathname === "/contact-us" ? (
              "text-gray-100 bg-yellow-500 cursor-pointer rounded-r-2xl cursor-500 transition-colors duration-500"
            ) : (
              "text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500"
            )
          }>
            <div className="flex space-x-3 p-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              <p className="font-semibold text-xl">Contact Us</p>
            </div>
          </div>
          <div onClick={() => logout()} className="text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500">
            <div className="flex space-x-3 p-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <p className="font-semibold text-xl">Logout</p>
            </div>
          </div>
        </div>
      </div>
    )
}
