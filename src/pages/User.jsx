import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser, setFilterUser } from '../store/action'
import TableData from '../components/TableData'
import LoadingPlaceholder from '../components/LoadingPlaceholder'

export default function User() {
  const dispatch = useDispatch()
  const userPerPage = useSelector(state => state.userPerPage)
  const listUser = useSelector(state => state.userData)
  const loading = useSelector(state => state.loading)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState([])
  const [lastIndexPage, setLastIndexPage] = useState(5)
  const [firstIndexPage, setFirstIndexPage] = useState(0)
  const itemsPerPage = 5
  const [input, setInput] = useState({
    keyword: ''
  })

  useEffect(() => {
    dispatch(fetchUser(firstIndexPage, lastIndexPage))
  },[currentPage])
  
  useEffect(() => {
    !loading && arrPage()
  },[loading])


  if(loading) {
    return <LoadingPlaceholder/>
  }

  function arrPage() {
    const pages = []
    for (let i = 1; i <= Math.ceil(listUser.length/itemsPerPage); i++) {
      pages.push(i)
    }
    setTotalPage(pages)
  }

  function handleClickPage(pageNumber) {
    const newLastIndex = pageNumber * itemsPerPage
    const newFirstIndex = newLastIndex - itemsPerPage

    setCurrentPage(pageNumber)
    setLastIndexPage(newLastIndex)
    setFirstIndexPage(newFirstIndex)
  }

  function decrementPage() {
    if(currentPage > 1) {
      const newCurrentPage = currentPage - 1
      setCurrentPage(newCurrentPage)
      const newLastIndex = newCurrentPage * itemsPerPage
      const newFirstIndex = newLastIndex - itemsPerPage
      setLastIndexPage(newLastIndex)
      setFirstIndexPage(newFirstIndex)
    }
  }

  function incrementPage() {
    if(currentPage < totalPage.length) {
      const newCurrentPage = currentPage + 1
      setCurrentPage(newCurrentPage)
      const newLastIndex = newCurrentPage * itemsPerPage
      const newFirstIndex = newLastIndex - itemsPerPage
      setLastIndexPage(newLastIndex)
      setFirstIndexPage(newFirstIndex)
    }
  }

  function handleSearch(e) {
    const value = e.target.value
    const newListUser = [...listUser]
    setInput({
      ...input, [e.target.name]: value
    })
    const filter = newListUser.filter(user => {
      return (
        `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}` === value.toLowerCase() ||
        user.name.first.toLowerCase() === value.toLowerCase()
      )
    })
    value ? dispatch(setFilterUser(filter)) : dispatch(fetchUser(firstIndexPage, lastIndexPage))
  }

  return (
    <div>
      <div className="flex">
        <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
          <p className="font-semibold text-2xl">Users</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-1/4 mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search user here..."
            name="keyword"
            value={input.keyword}
            onChange={handleSearch}
          />
        </div>
        <table className="min-w-full shadow leading-normal">
          <thead>
            <tr>
              <th scope="col" className="px-5 py-5 bg-white  border-b border-gray-200 text-gray-800  text-left font-bold text-sm uppercase font-normal">
                User
              </th>
              <th scope="col" className="px-5 py-5 bg-white  border-b border-gray-200 text-gray-800  text-left font-bold text-sm uppercase font-normal">
                Gender
              </th>
              <th scope="col" className="px-5 py-5 bg-white  border-b border-gray-200 text-gray-800  text-left font-bold text-sm uppercase font-normal">
                Email
              </th>
              <th scope="col" className="px-5 py-5 bg-white  border-b border-gray-200 text-gray-800  text-left font-bold text-sm uppercase font-normal">
                Phone
              </th>
              <th scope="col" className="px-5 py-5 bg-white  border-b border-gray-200 text-gray-800  text-left font-bold text-sm uppercase font-normal">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {
              userPerPage.length ? userPerPage.map((user,idx) => <TableData key={idx} user={user}/>) : (
                <tr>
                  <td colSpan="5" className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                    No match data
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <p className="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-blue-100"
                  onClick={() => decrementPage()}
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </p>
                {
                  totalPage.map((page,idx) => {
                    return (
                      <p key={idx} className={
                        currentPage === page ? (
                          "bg-gray-300 cursor-pointer border-gray-300 text-gray-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        ) : "bg-white cursor-pointer border-gray-300 text-gray-800 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      }
                        onClick={() => handleClickPage(page)}
                      >
                        { page }
                      </p>
                    )
                  })
                }
                <p className="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-blue-100"
                  onClick={() => incrementPage()}
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
